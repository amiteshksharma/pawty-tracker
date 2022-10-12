import { StyleSheet } from 'react-native';
import { COLORS } from './constants/palette';

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
  }
});

export const headerTintColor = COLORS.white;
export const headerTitleAlign = 'center';
