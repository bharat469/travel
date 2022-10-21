import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from 'react-native';
import React, {useEffect} from 'react';
import ViewWrapper from '../../components/viewWrapper';
import HeaderComp from '../../components/headerComp';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {paraSize} from '../../constant/fontSize';
import {FontColor} from '../../constant/colors';
import InputComp from '../../components/inputComp';
import {useForm} from 'react-hook-form';
import ButtonComp from '../../components/buttonComp';
import {useDispatch} from 'react-redux';
import {RegisterAction} from '../../redux/actions/AuthAction';

const Register: React.FC = ({navigation}: any) => {
  const {control, handleSubmit} = useForm<FormData>();
  const dispatch: any = useDispatch();

  const RegisterData = async (data: any) => {
    dispatch(RegisterAction(data));
  };

  return (
    <ViewWrapper>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{alignItems: 'center'}}>
          <HeaderComp onPress={() => navigation.goBack()} />
          <Text style={styles.registerHeader}>
            New Here Register yourself and open the world of enjoyment !!!!{' '}
          </Text>
          <View style={styles.inputViewBox}>
            <InputComp
              name="Name"
              placeHolder="Enter Your Name"
              control={control}
              keyBoard="default"
              rules={{
                required: 'Name is required',
                pattern: {
                  value: '',
                  message: 'Invalid Name!!!',
                },
              }}
              secureKey={false}
            />
            <InputComp
              name="Email"
              placeHolder="Enter Your Email"
              control={control}
              keyBoard="email-address"
              rules={{
                required: 'Email is Required',
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Invalid Email!!!',
                },
              }}
              secureKey={false}
            />
            <InputComp
              name="Password"
              placeHolder="Enter Your Password"
              control={control}
              keyBoard="default"
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 3,
                  message: 'Password should not be minimum 3 characters long',
                },
              }}
              secureKey={false}
            />
          </View>
          <View style={styles.btnView}>
            <ButtonComp
              ButtonName="Register"
              ButtonClick={handleSubmit(RegisterData)}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ViewWrapper>
  );
};

export default Register;

const styles = StyleSheet.create({
  registerHeader: {
    top: hp('4%'),
    fontSize: paraSize,
    color: FontColor,
    fontWeight: '600',
    width: wp('80%'),
  },
  inputViewBox: {
    top: hp('7%'),
  },
  btnView: {
    top: hp('14%'),
  },
});
