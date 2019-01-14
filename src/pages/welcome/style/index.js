import styled from 'styled-components/native'

import {
  pikachuYellow,
  white,
} from 'themes'

export const WelcomeView = styled.View`
  display: flex;  
  align-items: center
  justify-content: center
  background-color: ${pikachuYellow}
  height: 100%
`

export const WelcomeText = styled.Text`
  font-size: 36
  color: ${white}
`

export const GoToRegionsButton = styled.TouchableOpacity`
  margin-top: 50
  align-items: center
`

export const GoToRegionsLabel = styled.Text`
  font-size: 18
  color: ${white}
`
