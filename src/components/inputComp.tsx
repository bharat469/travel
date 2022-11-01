import {StyleSheet, TextInput, View, Text} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FontColor} from '../constant/colors';

interface inputProps {
  secureKey: boolean;
  keyBoard: any;
  control: any;
  name: string;
  placeHolder: string;
  rules: {};
  icon: any;
}

const InputComp = (props: inputProps) => {
  return (
    <View>
      <Controller
        control={props.control}
        name={props.name}
        rules={props.rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <View
            style={[
              styles.containerStyle,
              {borderColor: error ? 'red' : FontColor},
            ]}>
            <View style={styles.InputStyle}>
              <View style={{padding: 12}}>{props.icon}</View>
              <TextInput
                placeholder={props.placeHolder}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType={props.keyBoard}
                style={styles.textInputStyle}
                secureTextEntry={props.secureKey}
                placeholderTextColor={FontColor}
              />
            </View>
            {error && (
              <Text
                style={{
                  color: 'red',
                  left: wp('2%'),
                  padding: 2,
                  width: wp('70%'),
                }}>
                {error.message}
              </Text>
            )}
          </View>
        )}
      />
    </View>
  );
};

export default InputComp;

const styles = StyleSheet.create({
  textInputStyle: {
    color: '#fff',
    width: wp('80%'),
    padding: 18,
    borderRadius: 12,
    borderColor: FontColor,
  },
  containerStyle: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: FontColor,
    margin: 12,
    
  },
  InputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});
