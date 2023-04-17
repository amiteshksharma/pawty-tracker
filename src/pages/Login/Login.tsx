import React, {useEffect, useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchUserDetails} from '../../api/login';
import {loginAction, LoginFailAction} from '../../app/actions';
import Button from '../../components/Button/Button';
import {COLORS} from '../../constants/palette';
import {auth, FirebaseAuthTypes} from '../../firebase/config';
import {DOG_PAW} from '../../images';
import {UserDetails} from '../../types/user';
import {styles} from './styles';

interface LoginProps {
  navigation: any;
}

const Login = (props: LoginProps) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [initializing, setInitializing] = useState(true);
  const [userInfo, setUserInfo] = useState<UserDetails | null>(null);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle user state changes
  useEffect(() => {
    auth().onAuthStateChanged(userState => {
      setUser(userState);

      if (initializing) {
        setInitializing(false);
      }
    });
  }, [initializing, user]);

  const loginAttempt = () => {
    if (!email || !password) {
      console.log('invalid value!');
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(usr => {
        // fetch the user's information
        console.log('Logged in!');
      })
      .catch(error => {
        dispatch(LoginFailAction());
        console.log('The error code is: ' + error.code);
      });

    fetchUserDetails(email).then(data => {
      setUserInfo(data);
    });

    clearForm();
  };

  // clear the form states after submit
  const clearForm = () => {
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (userInfo && user) {
      const userDetails = {
        email: userInfo.email,
        username: userInfo.username,
        uid: userInfo.uid,
      };
      const authInfo = {
        token: user?.uid,
        lastLoggedIn: user?.metadata.lastSignInTime,
      };
      dispatch(loginAction(userDetails, authInfo));
      // reset the stack navigation so we can't access landing page
      navigation.navigate('MainAppPage');
    }
  }, [userInfo, user]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={DOG_PAW} style={styles.image} />
      </View>

      <View style={styles.loginView}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome back</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Email'}
            placeholderTextColor={COLORS.placeholder}
            textContentType={'emailAddress'}
            onChangeText={setEmail}
            value={email}
          />

          <TextInput
            style={styles.input}
            placeholder={'Password'}
            placeholderTextColor={COLORS.placeholder}
            textContentType={'password'}
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />

          <Button text={'Login'} onPress={loginAttempt} />
        </View>
      </View>
    </View>
  );
};

export default Login;
