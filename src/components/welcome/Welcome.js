import React from 'react'

import * as string from './strings'
import {
  WelcomeView,
  WelcomeText
} from './style'

const Welcome = () => (
  <WelcomeView>
    <WelcomeText>
      {string.WelcomeTitle}
    </WelcomeText>
  </WelcomeView>
)

export default Welcome
