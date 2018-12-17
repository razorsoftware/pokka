import Page1 from './Page1';
import Page2 from './Page2';

import { create } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
  Home: Page1,
  About: Page2,
});

export default { TabNavigator };