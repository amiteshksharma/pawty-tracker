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
  iconContainer: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 50,
    height: 50
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
    paddingTop: 7,
  },
  bottomTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: 5,
    paddingBottom: 5
  },
  bottomTextCreatedBy: {
    width: '70%',
    paddingRight: 8,
    fontFamily: 'Lato-Regular',
    fontSize: 11,
    color: COLORS.black,
  },
  bottomText: {
    fontFamily: 'Lato-Regular',
    fontSize: 11,
    color: COLORS.black,
    textTransform: 'capitalize'
  },
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
