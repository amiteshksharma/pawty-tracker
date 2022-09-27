import React from 'react';
import {View} from 'react-native';
import {NativeRouter, Route, Routes} from 'react-router-native';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import {styles} from './styles';

const MainApplication = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </View>
    </NativeRouter>
  );
};

export default MainApplication;
