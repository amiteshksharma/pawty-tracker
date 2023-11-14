import React, {useState} from 'react';
import {Modal, Pressable, Text, View} from 'react-native';
import {styles, buttonStyles} from './styles';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../../Button/Button';

interface AddUserModalProps {
  showModal: boolean;
  onCloseModal: () => void;
}

const AddUserModal = (props: AddUserModalProps) => {
  const [searchUserValue, setSearchUserValue] = useState<string>('');
  const {showModal, onCloseModal} = props;
  return (
    <Modal animationType="slide" transparent={false} visible={showModal}>
      <View style={styles.container}>
        <View style={styles.goBackContainer}>
          <Pressable onPress={() => onCloseModal()}>
            <Text style={styles.goBackText}>Close Window</Text>
          </Pressable>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            editable
            multiline
            numberOfLines={1}
            maxLength={64}
            placeholder="Search by name or email"
            onChangeText={value => setSearchUserValue(value)}
            value={searchUserValue}
            style={styles.searchTextbox}
          />
          <Button
            text="Search"
            onPress={() => console.log('here')}
            styles={buttonStyles}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AddUserModal;
