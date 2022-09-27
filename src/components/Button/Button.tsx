/**
 * Reusable button component for the application
 */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface ButtonStyles {
  container: object;
  text: object;
}

interface ButtonProps {
  text: string;
  onPress: () => void;
  styles?: ButtonStyles;
}

const Button = (props: ButtonProps) => {
  const {text, onPress} = props;
  const determineStyles = props.styles ?? styles;

  return (
    <TouchableOpacity style={determineStyles.container} onPress={onPress}>
      <Text style={determineStyles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
