import React from 'react'

import Wrapper from '../../components/Wrapper'
import {
  RegionsList,
  RegionName,
} from './style'

const data = [{ key: 'a' }, { key: 'b' }]

const Regions = () => (
  <Wrapper>
    <RegionsList data={data} renderItem={({ item }) => <RegionName>{item.key}</RegionName>} />
  </Wrapper>
)

export default Regions
