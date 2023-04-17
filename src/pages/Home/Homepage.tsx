import React, { useCallback, useEffect, useState } from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectState} from '../../app/selector';
import GroupList from '../../components/Groups/GroupList/GroupList';
import {styles} from './styles';
import { groupNames } from './Data';
import { getUserGroups } from '../../api/groups';
import { GroupItemProps } from '../../components/Groups/types';

interface HomepageProps {
  navigation: any;
}

const Homepage = (props: HomepageProps) => {
  const {navigation} = props;
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [userGroups, setUserGroups] = useState<GroupItemProps[]>([]);
  const selectedState = useSelector(selectState);

  useEffect(() => {
    setLoading(true);
    getUserGroupFunction();  
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);

    getUserGroupFunction();
  }, [])

  const getUserGroupFunction = () => {
    getUserGroups(selectedState.userInfo.uid).then(data => {
      console.log(data);
      setUserGroups(data.groups);
      setLoading(false);
    });
  }

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  // console.log(userGroups);
  return (
    <ScrollView style={styles.container} refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      <GroupList groups={userGroups} navigation={navigation} />
    </ScrollView>
  );
};

export default Homepage;
