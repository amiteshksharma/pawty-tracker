import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles, dropShadowStyles} from './styles';
import DropShadow from 'react-native-drop-shadow';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { GroupItemProps } from '../types';
import { DOG_ICON_TILE } from '../../../images';

const GroupItem = (props: GroupItemProps) => {
  const {name, petType} = props;

  const onPress = () => {
    console.log('clicked the ' + name);
  };

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View>
        <DropShadow style={dropShadowStyles}>
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.text}>{name}</Text>
              <Text style={styles.petType}>Pet Type: {petType}</Text>
            </View>
            
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={DOG_ICON_TILE} />
            </View>
          </View>
        </DropShadow>
      </View>
    </TouchableOpacity>
  );
};

export default GroupItem;
