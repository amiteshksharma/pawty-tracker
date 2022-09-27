import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigate} from 'react-router-native';
import Button from '../../components/Button/Button';
import {COLORS} from '../../constants/palette';
import {DOG_PAW} from '../../images';
import {styles} from './styles';

const Login = () => {
  const navigate = useNavigate();

  const onPressGoBack = () => {
    navigate('/');
  };

  const loginAttempt = () => {
    console.log('clicked');
  };

  return (
    <View style={styles.container}>
      <View style={styles.goBackContainer}>
        <TouchableOpacity onPress={onPressGoBack}>
          <Text style={styles.goBackText}>Go Back</Text>
        </TouchableOpacity>
      </View>

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
          />

          <TextInput
            style={styles.input}
            placeholder={'Password'}
            placeholderTextColor={COLORS.placeholder}
            textContentType={'password'}
            secureTextEntry={true}
          />

          <Button text={'Login'} onPress={loginAttempt} />
        </View>
      </View>
    </View>
  );
};

export default Login;
