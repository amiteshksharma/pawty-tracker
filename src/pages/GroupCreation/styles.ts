import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/palette';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.grey,
    paddingTop: 20,
    alignItems: 'center',
  },
  inputContainer: {
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  groupNameContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  input: {
    borderColor: COLORS.offwhite,
    borderBottomWidth: 1,
    color: COLORS.offwhite,
    width: 350,
  },
  charCount: {
    color: COLORS.offwhite,
    fontFamily: 'Lato',
    fontSize: 11,
    paddingTop: 5,
  },
  dropdown: {
    backgroundColor: COLORS.offwhite,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 10,
  },
  dropdownButton: {
    width: 350,
    borderColor: COLORS.offwhite,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
  },
  dropdownButtonText: {
    color: COLORS.offwhite,
    fontFamily: 'Lato-Regular',
  },
  chevron: {
    color: COLORS.offwhite,
  },
  button: {
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});
