import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-native';
import {selectState} from '../../app/selector';

const Home = () => {
  const navigate = useNavigate();
  const selectedState = useSelector(selectState);
  console.log(selectedState);

  return (
    <View>
      <Text onPress={() => navigate('/')}> Hello world!</Text>
    </View>
  );
};

export default Home;
