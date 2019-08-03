import styled from 'styled-components/native'

import {
  whiteSmoke,
  black,
} from 'themes'

export const RegionsList = styled.FlatList`
`

export const RegionView = styled.View`
  background-color: ${whiteSmoke}
  border-radius: 5
  padding-top: 20px
  padding-bottom: 20px
  padding-left: 50px
  padding-right: 50px
  margin: 10px
`

export const RegionButton = styled.TouchableOpacity`
  align-items: center
`

export const RegionName = styled.Text`
  color: ${black}
  font-size: 24
`

export const RegionIcon = styled.Image`
  width: 64
  height: 64
`
