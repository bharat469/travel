import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RadioForm from 'react-native-simple-radio-button';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Register: React.FC = ({navigation}: any) => {
  const {control, handleSubmit} = useForm<FormData>();
  const dispatch: any = useDispatch();
  const [gender, setGender] = useState('0');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  const RegisterData = async (data: any) => {
    dispatch(RegisterAction(data));
  };

  const RadioProps: any = [
    {label: 'Female', value: 0},
    {label: 'Male', value: 1},
  ];
  const IntrestedIn = ['Post Graduate', 'Graduate', 'HSC/Diploma', 'SSC'];

  return (
    <ViewWrapper>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{alignItems: 'center'}}>
          <HeaderComp onPress={() => navigation.goBack()} />
          <ScrollView
            contentContainerStyle={styles.registerScreen}
            // style={{ marginBottom: hp('19%'), paddingBottom: hp('20%') }}
          >
            <Text style={styles.registerHeader}>
              New Here Register yourself and open the world of enjoyment !!!!{' '}
            </Text>
            <View style={styles.inputViewBox}>
              <InputComp
                name="Name"
                placeHolder="Enter Your Name"
                control={control}
                keyBoard="default"
                icon={<Entypo name="user" size={24} color="#fff" />}
                rules={{
                  required: 'Name is required',
                  pattern: {
                    value: '3',
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
                icon={<Ionicons name="mail" size={24} color="#fff" />}
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
                name="phoneNumber"
                placeHolder="Enter Your Phone"
                control={control}
                keyBoard="number-pad"
                icon={<Entypo name="phone" size={24} color="#fff" />}
                rules={{
                  required: 'Phone is Required',
                  minLength: {
                    value: 10,
                    message: 'Phone should not be minimum 10 number long',
                  },
                }}
                secureKey={false}
              />

              <View style={styles.checkBoxView}>
                <RadioForm
                  radio_props={RadioProps}
                  initial={0}
                  onPress={(value: any) => setGender(value)}
                  formHorizontal={true}
                  labelHorizontal={true}
                  animation={true}
                  labelStyle={{fontSize: hp('2.2%'), margin: 12, color: '#fff'}}
                  style={{padding: 12}}
                  wrapStyle={{alignItems: 'center'}}
                  buttonColor={'#fff'}
                  selectedButtonColor={'red'}
                />
              </View>

              <InputComp
                name="Password"
                placeHolder="Enter Your Password"
                control={control}
                keyBoard="default"
                icon={<Entypo name="lock" size={24} color="#fff" />}
                rules={{
                  required: 'Password is required',
                  minLength: {
                    value: 3,
                    message: 'Password should not be minimum 3 characters long',
                  },
                }}
                secureKey={false}
              />
              <View style={{alignItems: 'center'}}>
                <SelectDropdown
                  data={IntrestedIn}
                  onSelect={(selected, index) => {
                    console.log(selected);
                  }}
                  buttonTextAfterSelection={(selected, index) => {
                    return selected;
                  }}
                  rowTextForSelection={(selected, index) => {
                    return selected;
                  }}
                  buttonStyle={styles.buttonStyle}
                  buttonTextStyle={{color: '#fff'}}
                  defaultButtonText=" Education Qualification"
                  renderDropdownIcon={() => (
                    <AntDesign name="caretdown" size={24} color="#fff" />
                  )}
                  dropdownIconPosition="right"
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={showDatePicker}
                  style={styles.picker}>
                  <Text style={styles.pickerText}>Enter Your Dob</Text>
                </TouchableOpacity>
              </View>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>
            <View style={styles.btnView}>
              <ButtonComp
                ButtonName="Register"
                ButtonClick={handleSubmit(RegisterData)}
              />
            </View>
          </ScrollView>
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

  checkBoxView: {
    // marginLeft: wp('12%'),
    alignItems: 'center',
  },
  buttonStyle: {
    width: wp('90%'),
    borderWidth: 2,
    borderColor: FontColor,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 12,
    borderRadius: 12,
    margin: 12,
  },
  registerScreen: {
    alignItems: 'center',
    height: hp('100%'),
  },
  btnView: {
    top: hp('8%'),
  },
  picker: {
    width: wp('90%'),
    borderWidth: 2,
    borderColor: FontColor,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 12,
    borderRadius: 12,
    margin: 12,
  },
  pickerText: {
    fontSize: hp('2%'),
    color: '#ffff',
    alignItems:'center'
  }
});
