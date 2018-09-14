import {createMaterialTopTabNavigator} from 'react-navigation'
// screens import
import Home from './screens/Home'
import ViroParentScreen from './screens/ViroParentScreen'
// config
import colors from './config/colors'

/**
 * The Tab Config sets the configuration for your root navigator. In our case, it declares the 'Home' screen as the entry point
 */
const tabNavConfig = {
  initialRouteName: 'Home',
  tabBarOptions:{
    style: {
      backgroundColor: colors.FFblack
    },
    indicatorStyle: {
      backgroundColor: colors.FFred
    }
  }
}

/**
 * The Tab Navigator configures the screens required for your navigation. In this case, we land on the 'Home' screen,
 * and have the 'ViroParentScreen' as the second tab. Screens are imported from the ./screens folder 
 */
const TabNavigator = createMaterialTopTabNavigator(
  { Home: { screen: Home, path: '/screens/Home'},
    ViroParentScreen: { screen: ViroParentScreen, path: '/screens/ViroParentScreen'},
  }, 
  tabNavConfig)

// Export the Tab Navigator Component in order to use in your App.json entry point
export default TabNavigator