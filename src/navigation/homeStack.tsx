import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/homeScreen';
import Define from '../screens/defineScreen/define';

const HomeStacks = createNativeStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <HomeStacks.Navigator>
      <HomeStacks.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStacks.Screen
        name="Define"
        component={Define}
        options={{headerShown: false}}
      />
    </HomeStacks.Navigator>
  );
};

export default HomeStack;
