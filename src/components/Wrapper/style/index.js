import styled from 'styled-components/native'

import * as color from '../../../themes'

export const WrapperView = styled.View`
  display: flex
  align-items: center
  justify-content: center
  background-color: ${color.red}
  height: 100%
`
export const ContentView = styled.View`
  background-color: ${color.lightBlue}
  align-items: center
  justify-content: center
  height: 85%
  width: 85%
  border-radius: 5
`
