import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import SelectDropdown from 'react-native-select-dropdown';
import Button from '../../components/Button/Button';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux';
import {selectState} from '../../app/selector';
import {createGroup} from '../../api/groups';

const petTypes = ['Dog', 'Cat', 'Fish', 'Bird', 'Turtle'];

// - name: primary key, non-nullable name of group
// - pet_type: non-nullable, Enum, type of pet

const GroupCreation = () => {
  const [groupName, setGroupName] = useState('');
  const [petType, setPetType] = useState('');
  const selectedState = useSelector(selectState);

  const createGroupOnPress = () => {
    if (groupName.length < 1 || petType === '') {
      console.log('empty values');
      return;
    }

    const data = {
      user: selectedState.userInfo.uid,
      pet_type: petType.toLowerCase(),
      name: groupName,
    };

    createGroup(data).then(data => {
      console.log(data);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.groupNameContainer}>
          <TextInput
            style={styles.input}
            placeholder="Group name"
            placeholderTextColor="#BBBBBB"
            maxLength={30}
            value={groupName}
            onChangeText={name => setGroupName(name)}
          />
          <Text style={styles.charCount}>{groupName.length}/30</Text>
        </View>
        <SelectDropdown
          data={petTypes}
          onSelect={(selectedItem, index) => {
            setPetType(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          renderDropdownIcon={isOpened => {
            return (
              <FontAwesomeIcon
                icon={isOpened ? faChevronUp : faChevronDown}
                style={styles.chevron}
                size={18}
              />
            );
          }}
          defaultButtonText={'Select a Pet Type'}
          rowStyle={{width: 350}}
          dropdownStyle={styles.dropdown}
          buttonStyle={styles.dropdownButton}
          buttonTextStyle={styles.dropdownButtonText}
        />
      </View>

      <View style={styles.button}>
        <Button text={'Create'} onPress={createGroupOnPress} />
      </View>
    </View>
  );
};

export default GroupCreation;
