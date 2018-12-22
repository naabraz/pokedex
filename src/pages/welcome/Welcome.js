import React from 'react'

import Wrapper from '../../components/Wrapper'
import SpringAnimatedView from '../../components/SpringAnimatedView'
import * as string from './strings'
import {
  WelcomeText,
} from './style'

const Welcome = () => (
  <Wrapper>
    <SpringAnimatedView>
      <WelcomeText>
        {string.WelcomeTitle}
      </WelcomeText>
    </SpringAnimatedView>
  </Wrapper>
)

export default Welcome
