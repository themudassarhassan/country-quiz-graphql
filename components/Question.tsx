import React from 'react';
import Image from 'next/image';
import { Option } from './';
import { IQuestion } from '../types';

interface QuestionProps {
  question: IQuestion,
  userAnswer?: string,
  onOptionClick: any
};

export const Question = ({question, userAnswer, onOptionClick}: QuestionProps) => {
  const {
    statement,
    options,
    correctAnswer,
  } = question;

  const getStatus = (option: any) => {
    if (userAnswer) {
      if (userAnswer === option) {
        if (userAnswer === correctAnswer) return 'correct';
        return 'wrong';
      } else if (option === correctAnswer) {
        if (userAnswer !== correctAnswer) return 'correct';
      } else return 'normal';
    } else return 'normal';
  };

  return (
    <div className="quiz-question">
      <p className="text-blue-600 font-bold text-2xl leading-8">{statement}</p>
      {options.map((option, index) => (
        <Option
          key={index}
          option={option}
          number={index + 1}
          onOptionClick={onOptionClick}
          status={getStatus(option)}
        />
      ))}
    </div>
  );
};
