/**
 * @format
 */

import { AppRegistry } from 'react-native';
//import App from './App';
import { name as appName } from './app.json';
import RouterComponent from './components/Router';

AppRegistry.registerComponent(appName, () => RouterComponent);
