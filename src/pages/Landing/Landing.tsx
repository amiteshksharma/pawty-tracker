/**
 * The landing page for the PawtyTracker app. 
 * 
 */
import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { DOG_IMAGE } from '../../images';

const Landing = () => {

    return (
        <View style={styles.container}>
            {/* title of the app */}
            <View>
                <Text style={styles.header}>Pawty Tracker</Text>
            </View>
            <Image style={styles.image} source={DOG_IMAGE} />
        </View>
    );
};

export default Landing;
