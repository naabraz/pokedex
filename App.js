import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Routes from './src/routes'

import reducers from './src/reducers'
import middleware from './src/middleware'

const store = createStore(reducers, middleware)

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>)

export default App
