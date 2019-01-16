import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from 'components/Wrapper'
import {
  RegionsList,
  RegionName,
  RegionView,
  RegionButton,
} from '../style'

import { capitalize } from 'helpers'

const Regions = (props) => {
  const { regions, navigation } = props

  return (
    <Wrapper>
      <RegionsList
        data={regions}
        renderItem={({ item }) =>
          <RegionView>
            <RegionButton onPress={() => navigation.navigate('Pokedex', { detailURL: item.url })}>
              <RegionName>
                {capitalize(item.name)}
              </RegionName>
            </RegionButton>
          </RegionView>}
        keyExtractor={({ name }) => name} />
    </Wrapper>
  )
}

Regions.propTypes = {
  regions: PropTypes.array,
  navigation: PropTypes.object,
}

export default Regions
