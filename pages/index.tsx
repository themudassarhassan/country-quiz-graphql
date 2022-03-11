import React, { FC } from 'react';
import { gql } from '@apollo/client';

import { Quiz } from '../components';
import client from '../appolo-client';
import { ICountry } from '../types';

const Home: FC<{ countries: ICountry[] }> = ({ countries }) => {
  return (
    <Quiz countries={countries} />
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          name
          capital
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries,
    },
  };
}

export default Home;
