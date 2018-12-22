import React from 'react'

import Wrapper from '../../components/Wrapper'
import * as string from './strings'
import {
  WelcomeText
} from './style'

const Welcome = () => (
  <Wrapper>
    <WelcomeText>
      {string.WelcomeTitle}
    </WelcomeText>
  </Wrapper>
)

export default Welcome
