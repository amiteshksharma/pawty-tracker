import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles, dropShadowStyles} from './styles';
import DropShadow from 'react-native-drop-shadow';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GroupItemProps} from '../types';
import {DOG_ICON_TILE} from '../../../images';

const GroupItem = (props: GroupItemProps) => {
  const {name, petType, createdBy, id, navigation} = props;

  const onPress = () => {
    navigation.navigate('Group Details', {
      name: name,
      id: id,
      petType: petType,
      createdBy: createdBy,
      navigation: navigation,
    });
  };

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View>
        <DropShadow style={dropShadowStyles}>
          <View style={styles.container}>
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={DOG_ICON_TILE} />
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.text}>{name}</Text>
              <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomTextCreatedBy} numberOfLines={1}>
                  Created By: {createdBy}
                </Text>
                <Text style={styles.bottomText}>Pet Type: {petType}</Text>
              </View>
            </View>
          </View>
        </DropShadow>
      </View>
    </TouchableOpacity>
  );
};

export default GroupItem;
