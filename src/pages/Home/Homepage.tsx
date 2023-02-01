import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectState} from '../../app/selector';
import GroupList from '../../components/Groups/GroupList/GroupList';
import {styles} from './styles';

interface HomepageProps {
  navigation: any;
}

const Homepage = (props: HomepageProps) => {
  const {navigation} = props;
  const selectedState = useSelector(selectState);
  console.log(selectedState);

  const groupNames = [
    'YogiPandey',
    'Doggy2',
    'Doggy3',
    'Title here',
    'Testing long title names',
    'check here',
    'checking checking',
    'long really long title here',
    'YogiPandey',
    'Doggy2',
    'Doggy3',
    'Title here',
  ];
  return (
    <View style={styles.container}>
      <GroupList groups={groupNames} />
    </View>
  );
};

export default Homepage;
