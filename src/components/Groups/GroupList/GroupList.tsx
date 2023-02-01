import React from 'react';
import {ScrollView, View} from 'react-native';
import GroupItem from '../GroupItem/GroupItem';
import {styles} from './styles';

interface GroupListProps {
  groups: string[];
}

const GroupList = (props: GroupListProps) => {
  const {groups} = props;

  const renderGroups = () => groups.map(group => <GroupItem name={group} />);

  return (
    <ScrollView>
      <View style={styles.container}>{renderGroups()}</View>
    </ScrollView>
  );
};

export default GroupList;
