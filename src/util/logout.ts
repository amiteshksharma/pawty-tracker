import {logoutAction} from '../app/actions';
import {store} from '../app/store';
import auth from '@react-native-firebase/auth';

const logout = (props: any) => {
  store.dispatch(logoutAction());
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  props.navigation.reset({
    index: 0,
    routes: [{name: 'Landing'}],
  });
};

export default logout;
