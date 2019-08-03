// @flow

import React from 'react'

import {
  WrapperView,
  ContentView,
} from './style'

type IWrapper = {
  children: Object,
}

const Wrapper = (props: IWrapper) => (
  <WrapperView>
    <ContentView>
      {props.children}
    </ContentView>
  </WrapperView>
)

export default Wrapper
