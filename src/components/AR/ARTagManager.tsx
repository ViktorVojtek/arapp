import React, {forwardRef, Ref} from 'react';
import {ViroNode} from '@viro-community/react-viro';
import ARTag from './ARTag';
import {ViroScale} from '@viro-community/react-viro/dist/components/Types/ViroUtils';

type Props = {
  planeReticleLocation: ViroScale;
};

const ARTagManager = forwardRef(function ARTagManagerComponent(
  props: Props,
  forwardedRef?: Ref<any>,
) {
  const {planeReticleLocation} = props;

  function onPress(): void {}

  return (
    <ViroNode
      ref={forwardedRef}
      transformBehaviors="billboardY"
      position={planeReticleLocation}
      onClick={onPress}
      scale={[0.5, 0.5, 0.5]}>
      <ARTag />
    </ViroNode>
  );
});

export default ARTagManager;
