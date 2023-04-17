import React from 'react';
import {styles} from './styles';
import {Text, View} from 'react-native';

interface GroupDetailProps {
  navigation: any;
  id: string;
}

const GroupDetails = () => {
  return (
    <View>
      <Text>Jello world!</Text>
    </View>
  );
};

export default GroupDetails;
