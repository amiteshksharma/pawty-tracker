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
  headerContainer: {
    width: '96%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.blue,
    paddingBottom: 10,
  },
  groupName: {
    fontSize: 28,
    color: COLORS.black,
  },
  petType: {
    paddingTop: 16,
    color: COLORS.black,
    fontSize: 16,
  },
  createdBy: {
    paddingTop: 4,
    color: COLORS.black,
    fontSize: 16,
  },
  horizontalLine: {
    padding: 5,
    borderColor: COLORS.grey,
    borderBottomColor: COLORS.offwhite,
    borderWidth: 1,
    width: '100%',
  },
  groupDetailsEventContainer: {
    paddingTop: 10,
    width: '96%',
  },
  eventContainer: {
    display: 'flex',
    borderRadius: 10,
    backgroundColor: COLORS.blue,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 24,
    color: COLORS.black,
    paddingLeft: 5,
  },
  eventDescription: {
    color: COLORS.black,
    fontSize: 16,
    paddingTop: 5,
    paddingLeft: 10,
  },
  eventTimeContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 2,
    paddingRight: 2,
  },
  eventTime: {
    color: COLORS.black,
    fontSize: 12,
  },
  addDetailEventContainer: {
    width: '100%',
  },
  addDetailEventText: {
    color: COLORS.white,
    display: 'flex',
    fontSize: 18,
  },
  addDetailEventButton: {
    backgroundColor: COLORS.darkgrey,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addUserContainer: {
    width: '100%',
  },
  addUserButton: {
    marginTop: 5,
    paddingLeft: 10,
    textAlign: 'left',
  },
  addUserButtonText: {
    fontSize: 16,
    color: COLORS.offwhite,
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
