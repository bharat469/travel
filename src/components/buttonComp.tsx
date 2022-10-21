import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontColor} from '../constant/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {paraSize} from '../constant/fontSize';

interface ButtonProps {
  ButtonName: string;
  ButtonClick: () => void;
}

const ButtonComp = (props: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={props.ButtonClick}>
      <Text style={styles.buttonText}>{props.ButtonName}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: FontColor,
    padding: 12,
    width: wp('70%'),
    alignItems: 'center',
  
    borderRadius: 12,
  },
  buttonText: {
    fontSize: paraSize,
  },
});
