import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from 'components/Wrapper'
import {
  RegionsList,
  RegionName,
  RegionIcon,
  RegionView,
  RegionButton,
} from '../style'
import { worldwide } from 'assets/icons'
import { capitalize } from 'helpers'

const Regions = (props) => {
  const { regions, navigation } = props

  return (
    <Wrapper>
      <RegionsList
        data={regions}
        numColumns={3}
        renderItem={({ item }) =>
          <RegionView>
            <RegionButton onPress={() => navigation.navigate('Pokedex', { detailURL: item.url })}>
              <RegionIcon source={worldwide} />
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
