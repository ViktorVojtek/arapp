import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ARStack from '../ARStack';
import DrawerContent from '../../components/Drawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      useLegacyImplementation={false}
      detachInactiveScreens={false}
      initialRouteName="ARStack"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="ARStack" component={ARStack} />
    </Drawer.Navigator>
  );
}
