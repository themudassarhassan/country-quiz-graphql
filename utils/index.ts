import { IQuestion, ICountry } from '../types';

export function generateCapitalQuestion(countriesData: ICountry[], qIndex: number) {
  const question: IQuestion = {
    statement: '',
    correctAnswer: '',
    options: [],
  };
  const country = countriesData[qIndex];

  question.statement = `${country.capital} is the capital of?`;
  question.correctAnswer = country.name;
  const options = [country.name];

  const totalCounties = countriesData.length;
  while (options.length !== 4) {
    const index = Math.round(Math.random() * totalCounties);
    if (options.indexOf(countriesData[index].name) === -1)
      options.push(countriesData[index].name);
  }

  // randomize options so correct answer gets shuffled
  options.sort(function () {
    return 0.5 - Math.random();
  });

  question.options = options;
  return question;
}
