import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {HomeStackParamList} from '../../navigation/ARStack';
import Layout from '../../components/Layout';
import ARBase from '../../components/AR';

type Props = NativeStackScreenProps<HomeStackParamList, 'AR'>;

export default function ARScreen(_props: Props) {
  return (
    <Layout isFluid isHeaderDivider={false} isHeaderShown isTransparent>
      <ARBase />
    </Layout>
  );
}

ARScreen.screenOptions = {
  headerShown: false,
};
