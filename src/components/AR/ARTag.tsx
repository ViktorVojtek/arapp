import {ViroImage} from '@viro-community/react-viro';
import React from 'react';

export default function ARTag() {
  return (
    <ViroImage
      rotation={[-90, 0, 0]}
      visible
      shadowCastingBitMask={0}
      source={require('../../assets/tracking_diffuse.png')}
    />
  );
}
