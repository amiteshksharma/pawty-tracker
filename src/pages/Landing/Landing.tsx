/**
 * The landing page for the PawtyTracker app.
 *
 */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {LANDING_LOGO} from '../../images';
import Button from '../../components/Button/Button';
import {useNavigate} from 'react-router-native';

const Landing = () => {
  const navigate = useNavigate();

  const onPressSignup = () => {
    navigate('/signup');
  };

  const onPressLogin = () => {
    navigate('/login');
  };

  return (
    <View style={styles.container}>
      {/* The app logo*/}
      <Image style={styles.image} source={LANDING_LOGO} />

      {/* The app slogan */}
      <View>
        <Text style={styles.slogan}>Track all your dog's needs.</Text>
      </View>

      {/* The signup button */}
      <View style={styles.credentials}>
        <Button text={'Get Started'} onPress={onPressSignup} />

        <View style={styles.line} />

        <TouchableOpacity style={styles.login} onPress={onPressLogin}>
          <Text style={styles.loginText}>Already a user? Login here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Landing;