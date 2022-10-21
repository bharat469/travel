import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthActions} from '../slice/AuthSlice';

export const SaveToken = (token: string) => {
  return async (dispatch: any) => {
    const SaveTokenLocally = async () => {
      try {
        await AsyncStorage.setItem('@userToken', token).then(() =>
          console.log('Saved Successfully'),
        );
      } catch (e) {
        console.log('unable to save', e);
      }
    };
    try {
      await SaveTokenLocally();
    } catch {
      (e: any) => console.log('error is save', e);
    }
  };
};

export const GetToken = () => {
  return async (dispatch: any) => {
    const GetUserToken = async () => {
      try {
        const value: any = await AsyncStorage.getItem('@userToken');
        return value != null
          ? dispatch(AuthActions.SaveToken(value))
          : console.log('null value');
      } catch {
        (e: any) => console.log('error internal', e);
      }
    };
    try {
      await GetUserToken();
    } catch {
      (e: any) => console.log('error outer', e);
    }
  };
};

export const Logout = () => {
  return async (dispatch: any) => {
    const DeleteTokenLocally = async () => {
      try {
        await AsyncStorage.removeItem('@userToken')
          .then(dispatch(AuthActions.SaveToken(null)))
          .catch(e => console.log(e));
      } catch {
        (e: any) => console.log('not working', e);
      }
    };
    try {
      await DeleteTokenLocally();
    } catch {
      (e: any) => console.log('outer', e);
    }
  };
};
