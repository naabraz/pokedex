import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation'

import Welcome from '../pages/Welcome'
import Regions from '../pages/Regions'

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
