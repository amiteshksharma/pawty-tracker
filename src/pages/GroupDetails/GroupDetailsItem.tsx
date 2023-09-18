import React from 'react';
import {styles} from './styles';
import {Text, View} from 'react-native';

interface GroupDetailsEvent {
  title: string;
  description: string;
  created: string;
}

const groupDetailsEvent = (item: GroupDetailsEvent) => {
  //   const date = new Date(item.created);

  return (
    <View style={styles.eventContainer}>
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text style={styles.eventDescription}>{item.description}</Text>
      <View style={styles.eventTimeContainer}>
        <Text style={styles.eventTime}>Occurred at {item.created}</Text>
      </View>
    </View>
  );
};

export default groupDetailsEvent;
