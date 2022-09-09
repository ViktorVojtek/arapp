import React from 'react';
import {Stack, Spinner, YStack, Text} from 'tamagui';

import ARNavigator from './ARNavigator';
import ARScene from './ARScene';
import useIsARSupported from './ARUseIsARSupported';

export default function ARBase() {
  const isARSupported = useIsARSupported();

  if (typeof isARSupported === 'undefined') {
    return (
      <Stack flexGrow={1} alignItems="center" justifyContent="center">
        <Spinner size="large" color="$purple10Light" />
      </Stack>
    );
  }

  if (!isARSupported) {
    return (
      <YStack flexGrow={1} justifyContent="center">
        <Text textAlign="center">AR Not supported</Text>
      </YStack>
    );
  }

  return <ARNavigator scene={ARScene} />;
}
