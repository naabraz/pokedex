import React, {Component} from 'react'

import {WelcomeView, WelcomeText} from './style'

class Welcome extends Component{
  render() {
    return (
      <WelcomeView>
        <WelcomeText>
          Pokédex
        </WelcomeText>
      </WelcomeView>
    )
  }
}

export default Welcome