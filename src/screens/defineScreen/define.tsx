import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ViewWrapper from '../../components/viewWrapper';
import HeaderComp from '../../components/headerComp';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FontColor} from '../../constant/colors';
import {HeaderSize, paraSize} from '../../constant/fontSize';
import ButtonComp from '../../components/buttonComp';
import {useDispatch} from 'react-redux';
import {Logout} from '../../redux/actions/saveToken';

const Define = ({navigation, route}: any) => {
  const {item} = route.params;
  const dispatch: any = useDispatch();
  return (
    <ViewWrapper>
      <HeaderComp onPress={() => navigation.goBack()} />
      <View style={styles.overAll}>
        <View style={styles.itemdata}>
          <Text style={styles.header}>Title :</Text>
          <Text style={styles.itemdatalist}>{item.title}</Text>
        </View>
        <View style={styles.itemdata}>
          <Text style={styles.header}>Body :</Text>
          <Text style={styles.itemdatalist}>{item.body}</Text>
        </View>
        <View style={{top: hp('12%')}}>
          <ButtonComp
            ButtonName="Logout"
            ButtonClick={() => dispatch(Logout())}
          />
        </View>
      </View>
    </ViewWrapper>
  );
};

export default Define;

const styles = StyleSheet.create({
  overAll: {
    top: hp('8%'),
    alignItems: 'center',
  },
  itemdata: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 12,
  },
  header: {
    color: FontColor,
    fontSize: HeaderSize,
    padding: 12,
    fontWeight: '700',
  },
  itemdatalist: {
    color: FontColor,
    textAlign: 'center',
    fontSize: paraSize,
  },
});
