import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetToken} from '../redux/actions/saveToken';
import AuthNavi from './AuthNavigation';
import HomeStack from './homeStack';
import {NavigationContainer} from '@react-navigation/native';

const Navigation = () => {
  const dispatch: any = useDispatch();
  const UserToken = useSelector((state: any) => state.Auth.token);
  console.log('user', UserToken);
  useEffect(() => {
    dispatch(GetToken());
  }, []);

  return (
    <NavigationContainer>
      {UserToken === null || undefined ? <AuthNavi /> : <HomeStack />}
    </NavigationContainer>
  );
};

export default Navigation;
