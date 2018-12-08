import React, {Component} from 'react'

import {WelcomeView, WelcomeText} from './style'

class Welcome extends Component{
  render() {
    return (
      <WelcomeView>
        <WelcomeText>
          Pokedex
        </WelcomeText>
      </WelcomeView>
    )
  }
}

export default Welcome