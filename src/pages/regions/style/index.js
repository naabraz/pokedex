import styled from 'styled-components/native'

import * as color from '../../../themes'

export const RegionsList = styled.FlatList`
`

export const RegionView = styled.View`
  margin-top: 30
  flex-direction: row
`

export const RegionName = styled.Text`
  margin-top: 5
  margin-left: 5
  color: ${color.white}
`

export const RegionIcon = styled.Image`
  width: 32
  height: 32
  align-items: center
`
