// @flow

import React from 'react'

import Wrapper from 'components/Wrapper'
import {
  RegionsList,
  RegionName,
  RegionView,
  RegionButton,
} from '../style'

import { capitalize } from 'helpers'

type IRegions = {
  regions: Array<Object>,
  navigation: Object,
}

const Regions = (props: IRegions) => {
  const { regions, navigation } = props

  return (
    <Wrapper>
      <RegionsList
        data={regions}
        renderItem={({ item }) =>
          <RegionView>
            <RegionButton onPress={() => navigation.navigate('Pokedex', { detailURL: item.url, region: item.name })}>
              <RegionName>
                {capitalize(item.name)}
              </RegionName>
            </RegionButton>
          </RegionView>}
        keyExtractor={({ name }) => name} />
    </Wrapper>
  )
}

export default Regions
