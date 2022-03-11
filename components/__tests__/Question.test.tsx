import { render, screen } from '@testing-library/react';
import { Question } from '../';
import { IQuestion } from '../../types';
import userEvent from '@testing-library/user-event';

const question: IQuestion = {
  statement: 'queston statement',
  options: ['first', 'second', 'third', 'fourth'],
  correctAnswer: 'first',
};

test('it renders question component correctly with all options', () => {
  const { container } = render(
    <Question
      question={question}
      userAnswer={question.correctAnswer}
      onOptionClick={() => {}}
    />
  );

  expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="quiz-question"
  >
    <p
      class="text-blue-600 font-bold text-2xl leading-8"
    >
      queston statement
    </p>
    <button
      aria-label="first"
      class="question-option correct-answer"
    >
      <span
        aria-label="option number"
      >
        1
      </span>
      <span
        aria-label="option name"
        class="ml-5"
      >
        first
      </span>
    </button>
    <button
      aria-label="second"
      class="question-option "
    >
      <span
        aria-label="option number"
      >
        2
      </span>
      <span
        aria-label="option name"
        class="ml-5"
      >
        second
      </span>
    </button>
    <button
      aria-label="third"
      class="question-option "
    >
      <span
        aria-label="option number"
      >
        3
      </span>
      <span
        aria-label="option name"
        class="ml-5"
      >
        third
      </span>
    </button>
    <button
      aria-label="fourth"
      class="question-option "
    >
      <span
        aria-label="option number"
      >
        4
      </span>
      <span
        aria-label="option name"
        class="ml-5"
      >
        fourth
      </span>
    </button>
  </div>
</div>
`);
});

test('it checks when user clicks right answer', () => {
  const { rerender } = render(
    <Question question={question} onOptionClick={() => {}} />
  );

  const correctOption = screen.getByLabelText(question.correctAnswer);
  userEvent.click(correctOption);

  rerender(
    <Question
      question={question}
      userAnswer={question.correctAnswer}
      onOptionClick={() => {}}
    />
  );

  expect(correctOption).toHaveClass('question-option correct-answer');
});

test('it checks when user clicks wrong answer', () => {
  const { rerender} = render(
    <Question question={question} onOptionClick={() => {}} />
  );
  
  const correctOption = screen.getByLabelText(question.correctAnswer);
  
  const wrongAnswer = question.options[3];
  const wrongOption = screen.getByLabelText(wrongAnswer);
  userEvent.click(wrongOption);
  
  rerender(
    <Question
      question={question}
      userAnswer={wrongAnswer}
      onOptionClick={() => {}}
    />
  );
  
  expect(wrongOption).toHaveClass('question-option wrong-answer');
  expect(correctOption).toHaveClass('question-option correct-answer');
});
