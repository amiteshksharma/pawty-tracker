import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Landing from './pages/Landing/Landing';
import { styles } from './styles';

const MainApplication = () => {
    return (
        <NativeRouter>
            <View style={styles.container}>
                <Routes>
                    <Route path="/" element={<Landing />} />
                </Routes>
            </View>
        </NativeRouter>
    );
};

export default MainApplication;
