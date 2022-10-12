import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectState } from '../../app/selector';
import GroupList from '../../components/Groups/GroupList/GroupList';
import { styles } from './styles';

const Homepage = () => {

    const selectedState = useSelector(selectState);
    console.log(selectedState);

    const groupNames = ["YogiPandey", "Doggy2", "Doggy3", "Title here", "Testing long title names", "check here", "checking checking", "long really long title here", "YogiPandey", "Doggy2", "Doggy3", "Title here"];
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <FontAwesomeIcon icon={faBars} color={'white'} size={28} />
            </View>

            <Text onPress={() => console.log('logout')}>Logout</Text>

            <GroupList groups={groupNames} />
        </View>
    )
};

export default Homepage;