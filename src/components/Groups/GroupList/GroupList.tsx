import React from 'react';
import {ScrollView, View} from 'react-native';
import GroupItem from '../GroupItem/GroupItem';
import {GroupItemProps} from '../types';
import {styles} from './styles';

interface GroupListProps {
  navigation: any;
  groups: GroupItemProps[];
}

const GroupList = (props: GroupListProps) => {
  const {groups, navigation} = props;

  const renderGroups = () => {
    if (groups === undefined || groups.length === 0) {
      return;
    }

    return groups.map(group => (
      <GroupItem {...group} navigation={navigation} />
    ));
  };

  return (
    <ScrollView>
      <View style={styles.container}>{renderGroups()}</View>
    </ScrollView>
  );
};

export default GroupList;
