import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ARScreen from '../../screens/AR';
import ExampleScreen from '../../screens/Example';

export type HomeStackParamList = {
  AR: undefined;
  Example: {text?: string};
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="AR">
      <Stack.Screen
        name="AR"
        component={ARScreen}
        options={ARScreen.screenOptions}
      />
      <Stack.Screen
        name="Example"
        component={ExampleScreen}
        options={ExampleScreen.screenOptions}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
