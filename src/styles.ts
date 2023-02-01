import {StyleSheet} from 'react-native';
import {COLORS} from './constants/palette';

export const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: COLORS.grey,
    flex: 1,
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleStyle: {
    fontFamily: 'Raleway-Medium',
    textAlign: 'center',
  },
  headerNavigationStyle: {
    backgroundColor: COLORS.grey,
  },
  drawerStyle: {
    backgroundColor: COLORS.grey,
  },
  drawerLabelStyle: {
    color: COLORS.offwhite,
  },
  drawerHeaderName: {
    borderColor: COLORS.offwhite,
    borderBottomWidth: 1,
  },
});

export const headerTintColor = COLORS.white;
export const headerTitleAlign = 'center';
export const drawerInactiveTintColor = COLORS.offwhite;
export const drawerActiveTintColor = COLORS.blue;
