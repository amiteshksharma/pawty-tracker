import React from 'react';
import {Text, View} from 'react-native';
import {styles, dropShadowStyles} from './styles';
import DropShadow from 'react-native-drop-shadow';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface GroupItemProps {
  name: string;
}

const GroupItem = (props: GroupItemProps) => {
  const {name} = props;

  const onPress = () => {
    console.log('clicked the ' + name);
  };

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View>
        <DropShadow style={dropShadowStyles}>
          <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
          </View>
        </DropShadow>
      </View>
    </TouchableOpacity>
  );
};

export default GroupItem;
