import React, { FC } from 'react';
import Image from 'next/image';

import { Question, Result } from './';
import { generateCapitalQuestion } from '../utils';
import { ICountry, IQuestion } from '../types';
import quizImage from '../public/quiz-img.svg';

export const Quiz: FC<{ countries: ICountry[]}> = ({ countries }) => {
  const [question, setQuestion] = React.useState<IQuestion>({
    statement: '',
    correctAnswer: '',
    options: [],
  });
  const [userAnswer, setUserAnswer] = React.useState('');
  const [qIndex, setQIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [isResultVisible, setIsResultVisible] = React.useState(false);

  React.useEffect(() => {
    const question = generateCapitalQuestion(countries, qIndex);
    setQuestion(question);
  }, [countries, qIndex]);

  function handleOptionClick(option: string) {
    if (!userAnswer) {
      setUserAnswer(option);
      if (option === question.correctAnswer) setScore(score + 1);
      else {
        setTimeout(() => setIsResultVisible(true), 1000);
      } 
    }
  }

  function handleNextBtn() {
    setQIndex(index => index + 1);
    setUserAnswer('');
  }

  function resetGame() {
    setScore(0);
    setQIndex(0);
    setUserAnswer('');
    setIsResultVisible(false);
  }
  
  return (
    <div className="max-w-xl mx-auto mt-11 relative">
      <h1 className="uppercase leading-8 text-3xl">Country Quiz</h1>

      <div className="bg-white rounded-3xl mt-3 py-12 px-6">
        {isResultVisible ? (
          <Result score={score} onReset={resetGame} />
        ) : (
          <>
            <div className="absolute top-[-40px] right-0 md:top-0">
              <Image alt="image" src={quizImage} />
            </div>
            <Question
              question={question}
              userAnswer={userAnswer}
              onOptionClick={handleOptionClick}
            />
            <div className="flex flex-row-reverse mt-5">
              <button
                type="button"
                onClick={handleNextBtn}
                className="text-white rounded-md bg-yellow-600 border border-yellow-600 px-6 py-3"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
