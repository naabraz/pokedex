import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from '../../../components/Wrapper'
import {
  RegionsList,
  RegionName,
} from '../style'

const Regions = (props) => {
  const { regions } = props
  return (
    <Wrapper>
      <RegionsList
        data={regions}
        renderItem={({ item }) =>
          <RegionName>
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
