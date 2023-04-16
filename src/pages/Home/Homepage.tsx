import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectState} from '../../app/selector';
import GroupList from '../../components/Groups/GroupList/GroupList';
import {styles} from './styles';
import { groupNames } from './Data';

interface HomepageProps {
  navigation: any;
}

const Homepage = (props: HomepageProps) => {
  const {navigation} = props;
  const selectedState = useSelector(selectState);
  console.log(selectedState);

  return (
    <View style={styles.container}>
      <GroupList groups={groupNames} />
    </View>
  );
};

export default Homepage;
