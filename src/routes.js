import { createRouter } from '@exponent/ex-navigation';
import HomeScreen from './components/Home';
import AboutScreen from './components/About';
import ProfileScreen from './components/Profile';
import IntroScreen from './components/Intro';
import TabsScreen from './components/Tabs';

const Router = createRouter(() => ({
  home: () => HomeScreen,
  about: () => AboutScreen,
  profile: () => ProfileScreen,
  intro: () => IntroScreen,
  tabs: () => TabsScreen
}));

export default Router;
