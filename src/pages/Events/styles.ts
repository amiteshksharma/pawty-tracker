import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/palette';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.grey,
    paddingTop: 10,
    alignItems: 'center',
  },
  textbox: {
    borderColor: COLORS.offwhite,
    color: COLORS.black,
    backgroundColor: COLORS.offwhite,
    width: 350,
    marginBottom: 30,
    marginTop: 60,
    borderRadius: 10,
  },
  createButton: {
    width: 350,
    marginTop: 250,
  },
  charCountContainer: {
    width: 340,
    alignItems: 'flex-end',
    marginTop: -30,
  },
  charCount: {
    color: COLORS.offwhite,
    fontFamily: 'Lato',
    fontSize: 13,
    paddingTop: 5,
  },
});
