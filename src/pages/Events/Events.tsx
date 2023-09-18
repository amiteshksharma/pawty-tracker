import React, {useState} from 'react';
import {styles} from './styles';
import {Button, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectUserInfo} from '../../app/selector';
import {TextInput} from 'react-native-gesture-handler';
import {createEvent} from '../../api/events';

const Events = (props: any) => {
  const {navigation} = props;
  const {id} = props.route.params;
  const userInfo = useSelector(selectUserInfo);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  const onCreateEvent = () => {
    const createEventProps = {
      title: title,
      description: description,
      createdBy: userInfo.uid,
      groupId: id,
    };

    createEvent(createEventProps).then(data => {
      navigation.goBack();
      console.log(data);
    });

    setDescription('');
    setTitle('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        editable
        maxLength={32}
        placeholder="Enter title"
        onChangeText={txt => setTitle(txt)}
        value={title}
        style={styles.textbox}
      />

      <TextInput
        editable
        multiline
        numberOfLines={6}
        maxLength={128}
        placeholder="Enter description"
        onChangeText={desc => setDescription(desc)}
        value={description}
        style={styles.textbox}
      />

      <View style={styles.createButton}>
        <Button title="Create" onPress={onCreateEvent} />
      </View>
    </View>
  );
};

export default Events;
