interface IOption {
  option: string,
  number: number,
  status: string | undefined,
  onOptionClick: any
};

export const Option = ({ option, number, status = 'normal', onOptionClick = () => {} }: IOption) => {

  const getClass = () => {
    if (status === 'correct') return 'correct-answer';
    else if (status === 'wrong') return 'wrong-answer';
    else return '';
  };

  return (
    <button aria-label={option} className={`question-option ${getClass()}`} onClick={() => onOptionClick(option)}>
      <span aria-label="option number">{number}</span>
      <span aria-label="option name" className="ml-5">{option}</span>
    </button>
  );
};
