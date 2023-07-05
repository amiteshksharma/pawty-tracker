import React from 'react';
import {styles} from './styles';
import {Text, View, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

// interface GroupDetailProps {
//   navigation: any;
//   item: string;
// }

const groupDetailsEvent = () => {
  return (
    <View style={styles.eventContainer}>
      <Text style={styles.eventTitle}>Yogi Bathroom</Text>
      <Text style={styles.eventDescription}>
        Details: Yogi went to the bathroom
      </Text>
      <View style={styles.eventTimeContainer}>
        <Text style={styles.eventTime}>Occurred at: 2:30pm</Text>
      </View>
    </View>
  );
};

const GroupDetails = (props: any) => {
  const {createdBy, id, name, petType, navigation} = props.route.params;

  console.log(id, navigation);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.groupName}>{name}</Text>
        <Text style={styles.petType}>Pet type: {petType}</Text>
        <Text style={styles.createdBy}>Group created by: {createdBy}</Text>
      </View>
      <View style={styles.horizontalLine} />

      <ScrollView style={styles.groupDetailsEventContainer}>
        {groupDetailsEvent()}
        {groupDetailsEvent()}
        {groupDetailsEvent()}
        {groupDetailsEvent()}
        {groupDetailsEvent()}
        {groupDetailsEvent()}
        {groupDetailsEvent()}
        {groupDetailsEvent()}
        {groupDetailsEvent()}
        {groupDetailsEvent()}
        {groupDetailsEvent()}
        {groupDetailsEvent()}
        {groupDetailsEvent()}
        {groupDetailsEvent()}
        {groupDetailsEvent()}
      </ScrollView>

      <View style={styles.addDetailEventContainer}>
        <Pressable
          onPress={() => console.log('here')}
          style={styles.addDetailEventButton}>
          <Text style={styles.addDetailEventText}>Add New Event</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GroupDetails;
