import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/palette';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue,
    height: 45,
    width: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
  },
  text: {
    color: COLORS.offwhite,
    fontFamily: 'Lato-Bold',
    fontSize: 24,
  },
});
