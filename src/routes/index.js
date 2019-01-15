import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation'

import Welcome from '../screens/Welcome'
import Regions from '../screens/Regions'
import Pokedex from '../screens/Pokedex'

const AppNavigator = createStackNavigator(
  {
    Welcome,
    Regions,
    Pokedex,
  },
  {
    initialRouteName: 'Welcome',
  }
)

const Routes = createAppContainer(AppNavigator)

export default Routes
