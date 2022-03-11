import Image from 'next/image';
import scoreImg from '../public/score.svg';

interface IResultsProps {
  score: number,
  onReset: any
};

export const Result = (props: IResultsProps) => {
  const { score, onReset } = props;
  return (
    <div className="flex flex-col items-center">
      <Image alt="score svg image" src={scoreImg} />
      <div className="flex flex-col py-16 items-center">
        <h2 className="text-blue-700 mb-3 text-4xl leading-6">Results</h2>
        <p className="text-lg">
          You got <span className="text-green-500 text-5xl">{score}</span> correct answers!
        </p>
      </div>
      <button onClick={onReset} className="bg-indigo-600 px-2 py-2 rounded-md text-white">
        Try again
      </button>
    </div>
  );
};
