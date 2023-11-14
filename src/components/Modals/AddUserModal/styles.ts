import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/palette';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.grey,
    paddingTop: 10,
    alignItems: 'center',
  },
  goBackContainer: {
    width: '100%',
    paddingLeft: 10,
  },
  goBackText: {
    color: COLORS.offwhite,
    fontSize: 20,
  },
  searchContainer: {
    width: '95%',
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
  },
  searchTextbox: {
    width: '75%',
    color: COLORS.black,
    backgroundColor: COLORS.offwhite,
  },
});

export const buttonStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue,
    height: 50,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.offwhite,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
});
