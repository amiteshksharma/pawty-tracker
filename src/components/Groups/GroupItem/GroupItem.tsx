import React from 'react';
import { Text, View } from 'react-native';
import { styles, dropShadowStyles } from './styles';
import DropShadow from "react-native-drop-shadow";


interface GroupItemProps {
    name: string
};

const GroupItem = (props: GroupItemProps) => {
    const { name } = props;

    return (
        <View>
            <DropShadow style={dropShadowStyles}>
                <View style={styles.container}>
                    <Text style={styles.text}>{name}</Text>
                </View>
            </DropShadow>
        </View>
    )
}

export default GroupItem;