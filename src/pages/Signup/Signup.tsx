import React, {useState} from 'react';
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
import {auth} from '../../firebase/config';
import {SERVER_URL_DEV} from '../../constants/server';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressGoBack = () => {
    navigate('/');
  };

  const signUpAttempt = () => {
    fetch(`${SERVER_URL_DEV}/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });

    if (!username || !email || !password) {
      console.log('invalid value!');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
        fetch('http://192.168.86.52:5000/user/create', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            uid: user.user.uid,
            email: email,
            username: username,
          }),
        });
        console.log('success!');
      })
      .catch(error => {
        console.log(error.code);
      });

    clearForm();

    console.log('clicked');
    console.log(username, email, password);
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
