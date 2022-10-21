import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FontColor} from '../constant/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
interface HeaderProps {
  onPress: () => void;
}

const HeaderComp = (props: HeaderProps) => {
  return (
    <View style={styles.headerCompView}>
      <TouchableOpacity onPress={props.onPress}>
        <AntDesign name="back" size={24} color={FontColor} />
      </TouchableOpacity>
      <Text></Text>
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  headerCompView: {
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: hp('2%'),
  },
});
