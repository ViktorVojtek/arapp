import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {ViroARSceneNavigator} from '@viro-community/react-viro';

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
});

type Props = {
  scene: any; // () => JSX.Element | JSX.Element;
};

export default function ARNavigator(props: Props) {
  const {scene} = props;

  const isFocused = Platform.OS === 'ios';

  return (
    <ViroARSceneNavigator
      autofocus={isFocused}
      initialScene={{
        scene,
      }}
      bloomEnabled={false}
      hdrEnabled={false}
      pbrEnabled={false}
      shadowsEnabled={false}
      style={styles.navigator}
    />
  );
}
