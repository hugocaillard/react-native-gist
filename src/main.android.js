/**
 * React Native Webpack Starter Kit
 * https://github.com/jhabdas/react-native-webpack-starter-kit
 */
import {AppRegistry} from 'react-native';
import App from './components/App';

class Root extends App {
  static defaultProps = {
    ...App.defaultProps,
  };
}

AppRegistry.registerComponent('App', () => Root);
