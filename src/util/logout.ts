import {logoutAction} from '../app/actions';
import {store} from '../app/store';

const logout = (props: any) => {
  store.dispatch(logoutAction());
  props.navigation.reset({
    index: 0,
    routes: [{name: 'Landing'}],
  });
};

export default logout;
