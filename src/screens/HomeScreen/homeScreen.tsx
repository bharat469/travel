import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import ViewWrapper from '../../components/viewWrapper';
import ButtonComp from '../../components/buttonComp';
import {useDispatch, useSelector} from 'react-redux';
import {HomeApiCall} from '../../redux/actions/HomeAction';
import {FontColor, ParaColor, Primary} from '../../constant/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {paraSize} from '../../constant/fontSize';

const HomeScreen = ({navigation}: any) => {
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(HomeApiCall());
  }, []);
  const DataList = useSelector((state: any) => state.Home.dataList);

  return (
    <ViewWrapper>
      <FlatList
        data={DataList}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}: any) => {
          return (
            <TouchableOpacity
              style={styles.buttonHome}
              onPress={() => {
                navigation.navigate('Define', {item: item});
              }}>
              <Text style={styles.buttonText}>{index}</Text>
              <Text style={styles.buttonText}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </ViewWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonHome: {
    padding: 12,
    backgroundColor: FontColor,
    margin: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('90%'),
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonText: {
    color: Primary,
    fontSize: paraSize,
    fontWeight: '400',
    margin: 5,
  },
});
