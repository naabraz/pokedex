import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from 'components/Wrapper'
import {
  RegionsList,
  RegionName,
  RegionIcon,
} from '../style'
import { pokeball } from 'assets/icons'

const Regions = (props) => {
  const { regions } = props
  return (
    <Wrapper>
      <RegionsList
        data={regions}
        renderItem={({ item }) =>
          <RegionName>
            <RegionIcon source={pokeball} />
            {item.name}
          </RegionName>}
        keyExtractor={({ name }) => name} />
    </Wrapper>
  )
}

Regions.propTypes = {
  regions: PropTypes.array,
}

export default Regions
