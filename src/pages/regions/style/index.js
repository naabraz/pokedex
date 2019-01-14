import styled from 'styled-components/native'

import {
  whiteSmoke,
  black,
} from 'themes'

export const RegionsList = styled.FlatList`
`

export const RegionView = styled.View`
  margin-top: 30
  background-color: ${whiteSmoke}
  width: 25%
  align-items: center
  border-radius: 5
  margin: 10px
  padding-top: 5px
  padding-bottom: 5px
`

export const RegionName = styled.Text`
  margin-top: 5
  margin-left: 5
  color: ${black}
`

export const RegionIcon = styled.Image`
  width: 32
  height: 32
`
