import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import Register from '../screens/RegisterScreen/Register';
import OnBoarding from '../screens/onBoardingPage/onBoarding';

const AuthStack = createNativeStackNavigator();

const AuthNavi: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Onboard"
          component={OnBoarding}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <AuthStack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavi;
