import React, {Component, PropTypes} from 'react-native';
import Home from './pages/Home.js';

const {
  NavigatorIOS,
} = React;

class App extends Component {

  static propTypes = {
    navigationBarHidden: PropTypes.bool,
  };

  static defaultProps = {
    ...Component.defaultProps,
    navigationBarHidden: false,
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          component: Home,
          title: 'Home',
          passProps: { myProp: 'foo' },
        }}
      />
    );
  }
}

export default App;
