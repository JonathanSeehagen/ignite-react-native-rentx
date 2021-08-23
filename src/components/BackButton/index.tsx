import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import {
  Container
} from './styles';

interface Props extends BorderlessButton {
  color: string;
}

export function BackButton({ color, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}