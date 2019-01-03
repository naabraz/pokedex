import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from '../../components/Wrapper'
import SpringAnimatedView from '../../components/SpringAnimatedView'

import * as string from './strings'

import {
  WelcomeText,
  GoToRegionsButton,
  GoToRegionsLabel,
} from './style'

const Welcome = (props) => {
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
        </GoToRegionsButton>
      </SpringAnimatedView>
    </Wrapper>
  )
}

Welcome.propTypes = {
  navigation: PropTypes.object,
}

export default Welcome
