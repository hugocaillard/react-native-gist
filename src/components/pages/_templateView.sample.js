import React, { Component, PropTypes } from 'react-native';

// PAGES
// import Page from './Page';

// ELEMENTS
// import el from '../elements/el.js';

// LIBS
// import { func } from './file';

const {
  StyleSheet,
  View,
  ScrollView,
  ListView,
  TouchableHighlight,
  Image,
  Text,
} = React;

class ViewName extends Component {

  static propTypes = {
    navigationBarHidden: PropTypes.bool,
  };

  static defaultProps = {
    ...Component.defaultProps,
    navigationBarHidden: false,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Hello world</Text>
      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ViewName;
