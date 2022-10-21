import {API_URL} from '../../constant/ApiUrl';
import {HomeAction} from '../slice/homeSlice';

export const HomeApiCall = () => {
  return async (dispatch: any) => {
    const HomeApiCallFunction = async () => {
      let response: any = await fetch(API_URL);
      let json: any = await response.json();
      dispatch(HomeAction.GetData(json));
    };
    try {
      await HomeApiCallFunction();
    } catch {
      (e: any) => console.log('outside post', e);
    }
  };
};
