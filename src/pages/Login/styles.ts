import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/palette';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 0,
  },
  imageContainer: {
    marginTop: 35,
  },
  image: {
    width: 256,
    height: 256,
  },
  loginView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 425,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    color: COLORS.offwhite,
    fontSize: 32,
    fontFamily: 'Raleway-Regular',
  },
  line: {
    borderBottomColor: COLORS.offwhite,
    borderBottomWidth: 1,
    width: 315,
  },
  loginContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 200,
  },
  input: {
    width: 300,
    height: 45,
    borderWidth: 1,
    borderColor: COLORS.offwhite,
    fontFamily: 'Lato-Bold',
    color: COLORS.black,
    borderRadius: 25,
    paddingLeft: 20,
    backgroundColor: COLORS.offwhite,
  },
});
