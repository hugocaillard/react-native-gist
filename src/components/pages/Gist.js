import React, { Component, PropTypes } from 'react-native';
import * as moment from 'moment';

const {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
} = React;

class Gist extends Component {

  static propTypes = {
    gist: PropTypes.object,
    navigationBarHidden: PropTypes.bool,
    username: PropTypes.string,
  };

  static defaultProps = {
    ...Component.defaultProps,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    const gist = this.props.gist;
    const owner = gist.owner;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.mainView}>
          <View style={styles.row}>
            <Image
              style={styles.picture}
              source={{uri: owner.avatar_url}}
            />
            <Text style={[styles.username, styles.bold]}>
              {this.props.username}
            </Text>
          </View>
          <Text style={[styles.description, styles.bold]}>
            {gist.description}
          </Text>
          <Text style={styles.text}>
            Created: {moment.default(gist.created_at).format('MMMM Do YYYY, hh:mm:ss')}
            {'\n'}
            Updated: {moment.default(gist.created_at).format('MMMM Do YYYY, hh:mm:ss')}
          </Text>
          <Text style={styles.text}>
            Files:{'\n'}
            {Object.keys(gist.files).map(function(key, i){
              return (
                <Text
                  key={i}
                  style={styles.bold}
                >
                  • {gist.files[key].filename} - {gist.files[key].language}{'\n'}
                </Text>
              );
            })}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainView: {
    padding: 20,
  },
  text: {
    fontSize: 15,
    marginTop: 20,
  },
  description: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  picture: {
    width: 64,
    height: 64,
    marginRight: 20,
  },
  username: {
    fontSize: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Gist;
