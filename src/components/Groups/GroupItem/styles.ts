import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/palette';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue,
    height: 125,
    width: 350,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 1,
  },
  text: {
    fontFamily: 'Lato-Bold',
    fontSize: 22,
    color: COLORS.black,
  },
});

export const dropShadowStyles = {
  shadowColor: COLORS.cyan,
  shadowOffset: {
    width: 4,
    height: 2,
  },
  shadowOpacity: 1,
  shadowRadius: 4,
};
