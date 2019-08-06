import styled from 'styled-components/native';

import {
  black,
  whiteSmoke,
} from 'themes';

export const WelcomeText = styled.Text`
  font-size: 36
  color: ${whiteSmoke}
`;

export const GoToRegionsButton = styled.TouchableOpacity`
  background-color: ${whiteSmoke}
  margin-top: 50
  align-items: center
  border-radius: 5
  padding: 20px
`;

export const GoToRegionsLabel = styled.Text`
  font-size: 18
  color: ${black}
  margin-bottom: 10px
`;

export const RegionsIcon = styled.Image`
  width: 64
  height: 64
`;
