import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {AuthActions} from '../slice/AuthSlice';
import {SaveToken} from './saveToken';

export const RegisterAction = (data: any) => {
  return async (dispatch: any) => {
    const RegisterData = async () => {
      await auth()
        .createUserWithEmailAndPassword(data.Email, data.Password)
        .then((authUser: any) => {
          return authUser.user
            .updateProfile({
              displayName: data.Name,
            })
            .then(
              dispatch(AuthActions.LoginData(JSON.stringify(authUser.user))),
              dispatch(SaveToken(authUser.user.uid)),
              dispatch(AuthActions.SaveToken(authUser.user.uid)),
            );
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('The Email address is already use!!!');
          } else if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }
          Alert.alert('error register', error.code);
        });
    };
    try {
      await RegisterData();
    } catch (e) {
      console.log('error RegisterOut', e);
    }
  };
};

export const SignInAction = (data: any) => {
  return async (dispatch: any) => {
    const SignIn = async () => {
      auth()
        .signInWithEmailAndPassword(data.EmailSignIn, data.Password)
        .then((authUser: any) => {
          return authUser.user
            .updateProfile({
              displayName: data.Name,
            })
            .then(
              dispatch(AuthActions.LoginData(JSON.stringify(authUser.user))),
              dispatch(SaveToken(authUser.user.uid)),
              dispatch(AuthActions.SaveToken(authUser.user.uid)),
            );
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('The Email address is already use!!!');
          } else if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }
          Alert.alert('error Login', error.code);
        });
    };
    try {
      await SignIn();
    } catch (e) {
      console.log('error login', e);
    }
  };
};
