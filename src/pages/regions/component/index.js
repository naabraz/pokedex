import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from 'components/Wrapper'
import {
  RegionsList,
  RegionName,
  RegionIcon,
  RegionView,
} from '../style'
import { worldwide } from 'assets/icons'
import { capitalize } from 'helpers'

const Regions = (props) => {
  const { regions } = props
  return (
    <Wrapper>
      <RegionsList
        data={regions}
        numColumns={3}
        renderItem={({ item }) =>
          <RegionView>
            <RegionIcon source={worldwide} />
            <RegionName>
              {capitalize(item.name)}
            </RegionName>
          </RegionView>}
        keyExtractor={({ name }) => name} />
    </Wrapper>
  )
}

Regions.propTypes = {
  regions: PropTypes.array,
}

export default Regions
