import 'react-native-gesture-handler';
import React from 'react';
import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Settings from './pages/Settings/Settings';
import GroupCreation from './pages/GroupCreation/GroupCreation';
import logout from './util/logout';
import {
  styles,
  headerTintColor,
  headerTitleAlign,
  drawerInactiveTintColor,
  drawerActiveTintColor,
} from './styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {store} from './app/store';
import GroupDetails from './pages/GroupDetails/GroupDetails';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainApp = () => {
  const name = `Hello, ${
    store.getState().appState
      ? store.getState().appState?.userInfo.username
      : 'user'
  }!`;

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItem
              label={name}
              onPress={() => console.log('here')}
              inactiveTintColor={drawerInactiveTintColor}
              style={styles.drawerHeaderName}
            />
            <DrawerItemList {...props} />
            <DrawerItem
              label="Logout"
              onPress={() => logout(props)}
              inactiveTintColor={drawerInactiveTintColor}
            />
          </DrawerContentScrollView>
        );
      }}
      screenOptions={{
        headerStyle: styles.headerNavigationStyle,
        headerTintColor: headerTintColor,
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleAlign: headerTitleAlign,
        drawerStyle: styles.drawerStyle,
        drawerLabelStyle: styles.drawerLabelStyle,
        drawerInactiveTintColor: drawerInactiveTintColor,
        drawerActiveTintColor: drawerActiveTintColor,
      }}>
      <Drawer.Screen name="My Groups" component={Home} />
      <Drawer.Screen name="Create Group" component={GroupCreation} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen
        name="Group Details"
        component={GroupDetails}
        options={{
          drawerItemStyle: {display: 'none'},
        }}
      />
    </Drawer.Navigator>
  );
};

const MainApplication = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.headerStyle,
          headerTintColor: headerTintColor,
          headerTitleStyle: styles.headerTitleStyle,
          headerTitleAlign: headerTitleAlign,
          headerShadowVisible: false,
        }}>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{
            title: 'PawtyTracker',
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="MainAppPage"
          component={MainApp}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApplication;
