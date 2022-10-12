import React from 'react';
import { View } from 'react-native';
import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { styles, headerTintColor, headerTitleAlign } from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainApplication = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: styles.headerStyle,
        headerTintColor: headerTintColor,
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleAlign: headerTitleAlign,
        headerShadowVisible: false
      }} >
        <Stack.Screen name="Landing" component={Landing} options={{
          title: 'PawtyTracker',
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          title: '',
        }} />
        <Stack.Screen name="Signup" component={Signup} options={{
          title: '',
        }} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApplication;
