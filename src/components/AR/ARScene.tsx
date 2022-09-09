import React, {useRef, useState} from 'react';
import {
  ViroARPlane,
  ViroARScene,
  ViroBox,
  ViroDirectionalLight,
  ViroTrackingReason,
  ViroTrackingState,
} from '@viro-community/react-viro';
import {ViroScale} from '@viro-community/react-viro/dist/components/Types/ViroUtils';
import ARTagManager from './ARTagManager';

export default function ARScene() {
  const anchorRef = useRef();

  const [planeReticleLocation, setPlaneRecticleLocation] = useState<ViroScale>([
    0, 0, 0,
  ]);
  const [isReady, setIsReady] = useState(false);
  const [isPlaneFound, setIsPlaneFound] = useState(false);

  function onCameraARHitTest(results: any): void {
    // TODO: return if module is working
    /* if (isLoading || !models.length) {
      return;
    } */

    if (!isReady) {
      if (!!results?.hitTestResults?.length) {
        for (let i = 0; i < results.hitTestResults.length; i++) {
          let result = results.hitTestResults[i];

          if (result.type == 'ExistingPlaneUsingExtent') {
            setPlaneRecticleLocation(result.transform.position);
            // dispatchAR({type: ARActionType.SET_FOUND_PLANE});
            setIsReady(true);
            break;
            // return;
          }
        }
      }

      return;
    }
  }

  function onTrackingUpdated(
    state: ViroTrackingState,
    _reason: ViroTrackingReason,
  ): void {
    if (state === 3) {
      setIsPlaneFound(true);

      return;
    }

    setIsPlaneFound(false);
  }

  function onAnchorFound(anchor: any): void {
    anchorRef.current = anchor;
  }

  function onAnchorUpdated(updatedAnchor: any): void {
    // console.log('onAnchorUpdated');
    console.log(updatedAnchor);
  }

  function onAnchorRemoved(): void {
    console.log('onAnchorRemoved');
  }

  const anchorId = (anchorRef.current as any)?.anchorId as string;

  return (
    <ViroARScene
      anchorDetectionTypes="PlanesHorizontal"
      onCameraARHitTest={onCameraARHitTest}
      onTrackingUpdated={onTrackingUpdated}
      onAnchorFound={onAnchorFound}
      onAnchorUpdated={onAnchorUpdated}
      onAnchorRemoved={onAnchorRemoved}>
      <ViroDirectionalLight color="#fff" direction={[0, -1, 0]} />

      {isPlaneFound && (
        <ARTagManager planeReticleLocation={planeReticleLocation} />
      )}

      <ViroARPlane
        anchorId={anchorId}
        // minHeight={0.1}
        // minWidth={0.1}
        // alignment="Horizontal"
      >
        <ViroBox position={[0, 0, 0]} scale={[0.1, 0.1, 0.1]} />
      </ViroARPlane>
    </ViroARScene>
  );
}
