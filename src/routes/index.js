import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation'

import Welcome from '../pages/Welcome'
import Regions from '../pages/Regions'
import Pokedex from '../pages/Pokedex'

const AppNavigator = createStackNavigator(
  {
    Welcome: Welcome,
    Regions: Regions,
    Pokedex: Pokedex,
  },
  {
    initialRouteName: 'Welcome',
  }
)

const Routes = createAppContainer(AppNavigator)

export default Routes
