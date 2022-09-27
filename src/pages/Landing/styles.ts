import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/palette';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
  slogan: {
    fontSize: 22,
    color: COLORS.offwhite,
    fontFamily: 'Lato-Regular',
    marginTop: -30,
  },
  credentials: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 300,
  },
  line: {
    borderBottomColor: COLORS.offwhite,
    borderBottomWidth: 1,
    width: 275,
    marginTop: 15,
  },
  login: {
    marginTop: 15,
  },
  loginText: {
    fontFamily: 'Lato-regular',
    fontSize: 16,
    color: COLORS.offwhite,
  },
});
