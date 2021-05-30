import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../SplashScreen';
import MyWeb from '../WebView';
const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WebView"
        component={MyWeb}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Router;
