import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/palette';

export const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  container: {
    backgroundColor: COLORS.grey,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 30,
  },
  goBackContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    marginLeft: 30,
  },
  goBackText: {
    fontFamily: 'Lato-Italic',
    fontSize: 18,
    color: COLORS.offwhite,
  },
  imageContainer: {
    marginTop: 35,
  },
  image: {
    width: 256,
    height: 256,
  },
  signUpView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 425,
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.offwhite,
    fontSize: 28,
    fontFamily: 'Raleway-Regular',
  },
  line: {
    borderBottomColor: COLORS.offwhite,
    borderBottomWidth: 1,
    width: 315,
  },
  signUpContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 250,
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
