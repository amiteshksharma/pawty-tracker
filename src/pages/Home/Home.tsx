import React from 'react';
import Homepage from './Homepage';
import Settings from '../Settings/Settings';

interface HomeProps {
  navigation: any
}

const Home = (props: HomeProps) => {
  const { navigation } = props;
  return (
    <Homepage />
  );
};

export default Home;
