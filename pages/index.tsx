import React, { FC } from 'react';
import { Quiz } from '../components';
import client, { GET_COUNTRIES } from '../appolo-client';
import { ICountry } from '../types';

const Home: FC<{ countries: ICountry[] }> = ({ countries }) => {
  return (
    <Quiz countries={countries} />
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_COUNTRIES,
  });

  return {
    props: {
      countries: data.countries,
    },
  };
}

export default Home;
