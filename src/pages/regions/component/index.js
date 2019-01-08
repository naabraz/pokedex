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
import { upperCase } from 'helpers'

const Regions = (props) => {
  const { regions } = props
  return (
    <Wrapper>
      <RegionsList
        data={regions}
        renderItem={({ item }) =>
          <RegionView>
            <RegionIcon source={worldwide} />
            <RegionName>
              {upperCase(item.name)}
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
