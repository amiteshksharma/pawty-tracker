import React from 'react';
import {dropShadowStyles, styles} from './styles';
import {Text, View} from 'react-native';
import moment from 'moment';
import DropShadow from 'react-native-drop-shadow';
import {convertToMilliseconds} from '../../util/functions';

interface GroupDetailsEvent {
  title: string;
  description: string;
  created: string;
}

const groupDetailsEvent = (item: GroupDetailsEvent) => {
  const unixToInt = Number(item.created);
  const millisecondsTime = convertToMilliseconds(unixToInt);
  const formattedDate = moment(millisecondsTime).format('hh:mma');

  return (
    <DropShadow style={dropShadowStyles}>
      <View style={styles.eventContainer}>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventDescription}>{item.description}</Text>
        <View style={styles.eventTimeContainer}>
          <Text style={styles.eventTime}>Occurred at: {formattedDate}</Text>
        </View>
      </View>
    </DropShadow>
  );
};

export default groupDetailsEvent;
