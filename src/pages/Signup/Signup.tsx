import React, {useEffect, useState} from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useNavigate} from 'react-router-native';
import Button from '../../components/Button/Button';
import {COLORS} from '../../constants/palette';
import {DOG_PAW} from '../../images';
import {styles} from './styles';
import {auth, FirebaseAuthTypes} from '../../firebase/config';
import {addUserToDatabase} from '../../api/signup';

const Signup = () => {
  const navigate = useNavigate();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [username, setUsername] = useState('');
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
  }, [initializing]);

  const onPressGoBack = () => {
    navigate('/');
  };

  const signUpAttempt = () => {
    if (!username || !email || !password) {
      console.log('invalid value!');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(u => {
        // add user data to database
        addUserToDatabase({email: email, username: username, uid: u.user.uid});
      })
      .catch(error => {
        console.log(error.code);
      });

    clearForm();
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
    setUsername('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.select({ios: 'padding', android: 'height'})}
      keyboardVerticalOffset={Platform.select({ios: 0, android: 100})}
      enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.goBackContainer}>
            <TouchableOpacity onPress={onPressGoBack}>
              <Text style={styles.goBackText}>Go Back</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.imageContainer}>
            <Image source={DOG_PAW} style={styles.image} />
          </View>

          <View style={styles.signUpView}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Sign up for Pawty Tracker</Text>
            </View>

            <View style={styles.line} />

            <View style={styles.signUpContainer}>
              <TextInput
                style={styles.input}
                placeholder={'Username'}
                placeholderTextColor={COLORS.placeholder}
                textContentType={'username'}
                onChangeText={setUsername}
                value={username}
              />

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

              <Button text={'Sign up'} onPress={signUpAttempt} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Signup;
