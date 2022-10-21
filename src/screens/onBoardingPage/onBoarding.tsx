import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Trip} from '../../constant/image';
import ViewWrapper from '../../components/viewWrapper';
import {HeaderSize, paraSize} from '../../constant/fontSize';
import {BtnSecond, FontColor, ParaColor} from '../../constant/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const OnBoarding = ({navigation}: any) => {
  return (
    <ViewWrapper>
      <Trip width={300} height={400} />
      <View style={styles.noticeView}>
        <Text style={styles.headingNotice}>
          Always say yes to new adventures.
        </Text>
        <Text style={styles.paraNotice}>
          Bring together your happiness and book yourself a trip and escape form
          the stress
        </Text>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.registerBtn}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.SignBtn}
            onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.btnText, {color: '#fff'}]}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ViewWrapper>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  noticeView: {
    alignItems: 'center',
    padding: 12,
  },
  headingNotice: {
    fontSize: HeaderSize,
    textAlign: 'center',
    color: FontColor,
    fontWeight: '700',
  },
  paraNotice: {
    fontSize: paraSize,
    textAlign: 'center',
    color: ParaColor,
    padding: 12,
  },
  buttonView: {
    flexDirection: 'row',
    padding: 12,
    width: wp('80%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerBtn: {
    backgroundColor: FontColor,
    padding: 12,
    width: wp('30%'),
    alignItems: 'center',
    borderRadius: 12,
    margin: 12,
  },
  btnText: {
    fontSize: paraSize,
    fontWeight: '600',
  },
  SignBtn: {
    backgroundColor: BtnSecond,
  },
});
