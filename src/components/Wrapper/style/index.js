import styled from 'styled-components/native'

import {
  red,
  lightBlue,
} from 'themes'

export const WrapperView = styled.View`
  display: flex
  align-items: center
  justify-content: center
  background-color: ${red}
  height: 100%
`
export const ContentView = styled.View`
  background-color: ${lightBlue}
  align-items: center
  justify-content: center
  height: 85%
  width: 85%
  border-radius: 5
`
