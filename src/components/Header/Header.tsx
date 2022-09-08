import React from 'react';
import {Menu} from '@tamagui/feather-icons';
import {Stack, XStack} from 'tamagui';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  backgroundColor?: string;
  isDivider?: boolean;
  isTransparent?: boolean;
};

export default function Header(props: Props) {
  console.log(props);
  const {backgroundColor, isDivider, isTransparent} = props;

  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  function onPress(): void {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  const bgColor = isTransparent ? undefined : backgroundColor;
  const position = (isTransparent ? 'absolute' : undefined) as
    | 'absolute'
    | 'relative'
    | undefined;

  const baseProps = {
    position,
    top: isTransparent ? top : undefined,
    zIndex: 1,
  };

  const restProps = isDivider
    ? {
        borderBottomColor: '$purple4Light',
        borderBottomWidth: 1,
        ...baseProps,
      }
    : {
        ...baseProps,
      };

  console.log(restProps);

  return (
    <XStack
      alignItems="center"
      backgroundColor={bgColor}
      height="$3"
      px="$2"
      {...restProps}>
      <Pressable onPress={onPress}>
        <Stack p="$2">
          <Menu />
        </Stack>
      </Pressable>
    </XStack>
  );
}

Header.defaultProps = {
  backgroundColor: '$purple2Light',
  isDivider: false,
  isTransparent: false,
};
