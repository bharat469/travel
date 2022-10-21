import auth from '@react-native-firebase/auth';

export const RegisterAction = (data: any) => {
  return async (dispatch:any) => {
    const RegisterData = async () => {
      await auth()
        .createUserWithEmailAndPassword(data.Email, data.Password)
        .then(list => {
          console.log('User account created & signed in', list);
          dispatch();
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('The Email address is already use!!!');
          } else if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
          console.log('error register', error);
        });
    };
    try {
      await RegisterData();
    } catch (e) {
      console.log('error RegisterOut', e);
    }
  };
};
