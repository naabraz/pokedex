import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Welcome from './src/pages/welcome'

import reducers from './src/reducers'
import middleware from './src/middleware'

const store = createStore(reducers, middleware)

const App = () => (
  <Provider store={store}>
    <Welcome />
  </Provider>)

export default App
