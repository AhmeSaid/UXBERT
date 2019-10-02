/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splash from './App/Screens/Splash';
import Home from './App/Screens/Home';
import Api from './App/Screens/API';

AppRegistry.registerComponent(appName, () => App);
