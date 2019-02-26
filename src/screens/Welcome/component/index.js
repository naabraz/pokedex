// @flow

import React from 'react'

import Wrapper from 'components/Wrapper'
import SpringAnimatedView from 'components/SpringAnimatedView'

import * as string from './strings'

import {
  WelcomeText,
  GoToRegionsButton,
  GoToRegionsLabel,
  RegionsIcon,
} from '../style'

import { worldwide } from 'assets/icons'

const IWelcome = {
  navigation: Object,
}

const Welcome = (props: IWelcome) => {
  const { navigation } = props

  return (
    <Wrapper>
      <SpringAnimatedView>
        <WelcomeText>
          {string.WelcomeTitle}
        </WelcomeText>
        <GoToRegionsButton onPress={() => navigation.navigate('Regions')}>
          <GoToRegionsLabel>
            {string.RegionsLabel}
          </GoToRegionsLabel>
          <RegionsIcon source={worldwide} />
        </GoToRegionsButton>
      </SpringAnimatedView>
    </Wrapper>
  )
}

export default Welcome
