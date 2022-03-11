import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../appolo-client';
import { Quiz } from '../components';

const ClientSide = () => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <ClientSideQuiz />
  );
};

function ClientSideQuiz() {
  const { error, data, loading } = useQuery(GET_COUNTRIES);
  
  if (loading) {
    return <div>Loading....</div>;
  }
  
  if (error) {
    console.error(error);
    return null;
  }
  
  return <Quiz countries={data.countries} />;
}

export default ClientSide;
