import React from 'react';
import Homepage from './Homepage';
import {auth} from '../../firebase/config';

interface HomeProps {
  navigation: any;
}

const Home = (props: HomeProps) => {
  const {navigation} = props;

  auth().onAuthStateChanged(user => {
    if (!user) {
      navigation.navigate('Landing');
    }
  });

  return <Homepage navigation={navigation} />;
};

export default Home;
