import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation'

import Welcome from '../pages/welcome'
import Regions from '../pages/regions'

const AppNavigator = createStackNavigator(
  {
    Welcome: Welcome,
    Regions: Regions,
  },
  {
    initialRouteName: 'Welcome',
  }
)

const Routes = createAppContainer(AppNavigator)

export default Routes
