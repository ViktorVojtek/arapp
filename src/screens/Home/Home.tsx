import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {HomeStackParamList} from '../../navigation/HomeStack/HomeStack';
import Layout from '../../components/Layout';
import Home from '../../components/Home';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export default function HomeScreen(_props: Props) {
  return (
    <Layout isFluid isHeaderDivider={false} isHeaderShown isTransparent>
      <Home />
    </Layout>
  );
}

HomeScreen.screenOptions = {
  headerShown: false,
};
