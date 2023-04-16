import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/palette';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue,
    height: 75,
    width: 375,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
    elevation: 1,
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    width: 300,
    paddingLeft: 10,
  },
  text: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    color: COLORS.black,
  },
  petType: {
    fontFamily: 'Lato',
    fontSize: 12,
    color: COLORS.darkgrey
  },
  iconContainer: {
    width: 75,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 50,
    height: 50
  }
});

export const dropShadowStyles = {
  shadowColor: COLORS.dropshadow,
  shadowOffset: {
    width: 2,
    height: 2,
  },
  shadowOpacity: 1,
  shadowRadius: 2,
};
