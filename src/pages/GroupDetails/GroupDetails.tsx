import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {Text, View, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {fetchEventsForGroup} from '../../api/events';
import {useIsFocused} from '@react-navigation/native';
import GroupDetailsItem from './GroupDetailsItem';
import AddUserModal from '../../components/Modals/AddUserModal/AddUserModal';

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
  const [showModal, setShowModal] = useState<boolean>(false);

  const isFocused = useIsFocused();
  const onCreateEvent = () => {
    navigation.navigate('New Event', {
      id: id,
      createdBy: createdBy,
      name: name,
      petType: petType,
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

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.groupName}>{name}</Text>
        <Text style={styles.petType}>Pet type: {petType}</Text>
        <Text style={styles.createdBy}>Group Owner: {createdBy}</Text>
      </View>

      <View style={styles.addUserContainer}>
        <Pressable
          style={styles.addUserButton}
          onPress={() => setShowModal(true)}>
          <Text style={styles.addUserButtonText}>Click to add users</Text>
        </Pressable>
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

      <AddUserModal showModal={showModal} onCloseModal={onCloseModal} />
    </View>
  );
};

export default GroupDetails;
