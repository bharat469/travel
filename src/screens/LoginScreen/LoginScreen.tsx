import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ViewWrapper from '../../components/viewWrapper';
import HeaderComp from '../../components/headerComp';
import {HeaderSize, paraSize} from '../../constant/fontSize';
import {FontColor, ParaColor} from '../../constant/colors';
import {useForm} from 'react-hook-form';
import InputComp from '../../components/inputComp';
import ButtonComp from '../../components/buttonComp';
import {useDispatch} from 'react-redux';
import {SignInAction} from '../../redux/actions/AuthAction';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen: React.FC = ({navigation}: any) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();
  console.log(errors);
  const dispatch: any = useDispatch();

  const SignInFunction = (data: any) => {
    // console.log(data);
    dispatch(SignInAction(data));
  };

  return (
    <ViewWrapper>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{alignItems: 'center'}}>
          <HeaderComp onPress={() => navigation.goBack()} />
          <View style={styles.loginContainer}>
            <Text style={styles.loginHeader}>Let's Sign you in.</Text>
            <Text style={styles.loginPara}>
              Welcome back. You've been missed!
            </Text>
          </View>
          <View style={styles.inputBox}>
            <InputComp
              placeHolder="Enter Your Email"
              control={control}
              name="EmailSignIn"
              keyBoard={'email-address'}
              secureKey={false}
              icon={<Ionicons name="mail" size={24} color="#fff" />}
              rules={{
                required: 'Email is Invalid',
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Invalid Email!!!',
                },
              }}
            />

            <InputComp
              placeHolder="Enter Your password"
              control={control}
              name="Password"
              keyBoard={'email-address'}
              icon={<Entypo name="lock" size={24} color="#fff" />}
              secureKey={true}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 3,
                  message: 'Password should not be minimum 3 characters long',
                },
              }}
            />

            <View style={styles.registerTextView}>
              <Text style={styles.registerText}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registertextBtn}>Register</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              <ButtonComp
                ButtonName="Login"
                ButtonClick={handleSubmit(SignInFunction)}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ViewWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginContainer: {
    top: hp('4%'),
  },
  loginHeader: {
    fontSize: HeaderSize,
    color: FontColor,
    fontWeight: '700',
    padding: 12,
  },
  loginPara: {
    fontSize: HeaderSize,
    padding: 6,
    color: FontColor,
  },
  inputBox: {
    top: hp('6%'),
    alignItems: 'center',
  },
  registerTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    top: hp('15%'),
  },
  registerText: {
    fontSize: paraSize,
    color: ParaColor,
  },
  registertextBtn: {
    fontSize: paraSize,
    color: FontColor,
    fontWeight: '600',
  },
  btnView: {
    marginTop: hp('20%'),
  },
});
