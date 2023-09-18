import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {Text, View, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {fetchEventsForGroup} from '../../api/events';
import {useIsFocused} from '@react-navigation/native';
import GroupDetailsItem from './GroupDetailsItem';

interface Events {
  title: string;
  eventId: string;
  groupId: string;
  description: string;
  created: string;
  createdBy: string;
}

const GroupDetails = (props: any) => {
  const {createdBy, id, name, petType, navigation} = props.route.params;
  const [events, setEvents] = useState<Events[]>([]);

  const isFocused = useIsFocused();
  const onCreateEvent = () => {
    navigation.navigate('New Event', {
      id: id,
    });
  };

  useEffect(() => {
    getEventsForGroup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  const getEventsForGroup = () => {
    fetchEventsForGroup(id).then(data => {
      setEvents(data.details);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.groupName}>{name}</Text>
        <Text style={styles.petType}>Pet type: {petType}</Text>
        <Text style={styles.createdBy}>Group Owner: {createdBy}</Text>
      </View>
      <View style={styles.horizontalLine} />

      <ScrollView style={styles.groupDetailsEventContainer}>
        {events &&
          events.map(event => (
            <GroupDetailsItem
              title={event.title}
              description={event.description}
              created={event.created}
            />
          ))}
      </ScrollView>

      <View style={styles.addDetailEventContainer}>
        <Pressable
          onPress={() => onCreateEvent()}
          style={styles.addDetailEventButton}>
          <Text style={styles.addDetailEventText}>Add New Event</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GroupDetails;
