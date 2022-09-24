import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/palette';

export const styles = StyleSheet.create({
    container: {
    //   marginTop: 25,
    //   padding: 10,
      backgroundColor: COLORS.grey,
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    header: {
        fontSize: 32,
        color: COLORS.white,
    },
    image: {
        width: 256,
        height: 256,
    }
    
  });
