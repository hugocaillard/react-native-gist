/**
 * React Native Webpack Starter Kit
 * https://github.com/jhabdas/react-native-webpack-starter-kit
 */
import React, {Component, PropTypes} from 'react-native';

const {
  Platform,
  StyleSheet,
  Text,
  View,
} = React;

class App extends Component {

  static propTypes = {
    instructions: PropTypes.string,
  };

  static defaultProps = {
    ...Component.defaultProps,
    instructions: 'Usage instructions not provided.',
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      platform: Platform.OS,
      welcomeMsg: 'Good evening HETIC!',
    };
  }

  render() {
    const { instructions } = this.props;
    let { platform, welcomeMsg } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {welcomeMsg} {'\n'}
          Welcome to React Native for {platform}!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit src/components/App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#DDDDDD',
    marginBottom: 5,
  },
});

export default App;
