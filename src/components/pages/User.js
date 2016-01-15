import React, { Component, PropTypes } from 'react-native';

// PAGES
import Gist from './Gist.js';

// ELEMENTS
import GistCell from '../elements/GistCell.js';

// LIBS
import { getUser, getGists } from 'gistAPI';


const {
  StyleSheet,
  View,
  ScrollView,
  ListView,
  TouchableHighlight,
  Image,
  Text,
} = React;

class User extends Component {

  static propTypes = {
    navigationBarHidden: PropTypes.bool,
    navigator: PropTypes.object,
    user: PropTypes.string,
  };

  static defaultProps = {
    ...Component.defaultProps,
  };

  constructor(props, context) {
    super(props, context);

    this.viewGist = this.viewGist.bind(this);
    this.renderGistCell = this.renderGistCell.bind(this);

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      state: 'Loading',
      user: false,
      gists: ds.cloneWithRows([]),
      ds,
    };
  }

  componentDidMount() {
    getUser(this.props.user)
      .then((res) => res.text())
      .then((responseText) => {
        let user = JSON.parse(responseText);
        if (user.id) {
          this.setState({user});
        } else {
          this.setState({status: 'Failed'});
        }
      })
      .catch((error) => {
        this.setState({status: 'Failed'});
        throw new Error(error);
      });

    getGists(this.props.user)
      .then((res) => res.text())
      .then((responseText) => {
        let gists = this.state.ds.cloneWithRows(JSON.parse(responseText));
        this.setState({gists});
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  viewGist(gist) {
    this.props.navigator.push({
      title: 'Gist details',
      component: Gist,
      passProps: {
        username: this.state.user.name,
        gist,
      },
    });
  }

  renderGistCell(rowData) {
    return(
      <TouchableHighlight
        underlayColor={'#007aff'}
        onPress={() => this.viewGist(rowData)}
      >
        {GistCell(rowData)}
      </TouchableHighlight>
    );
  }

  render() {
    let { user, status, gists } = this.state;

    let content;
    if (user) {
      content = (<View style={styles.mainView}>
        <View style={styles.row}>
          <Image
            style={styles.picture}
            source={{uri: user.avatar_url}}
          />
          <Text style={styles.username}>
            {user.name}
          </Text>
        </View>
        <ListView
          dataSource={gists}
          renderRow={this.renderGistCell}
        />
      </View>);
    } else {
      content = <Text>{status}</Text>;
    }

    return (
      <ScrollView style={styles.container}>
        {content}
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
    padding: 20,
  },
  mainView: {
  },
  picture: {
    width: 64,
    height: 64,
    marginRight: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default User;
