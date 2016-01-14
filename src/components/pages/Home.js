import React, { Component, PropTypes } from 'react-native';

// PAGES
import User from './User';

// ELEMENTS
import UserCell from '../elements/UserCell.js';

// LIBS
import { getUsers } from 'gistAPI';


const {
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  ListView,
  TouchableHighlight,
} = React;

class Home extends Component {

  static propTypes = {
    navigationBarHidden: PropTypes.bool,
    navigator: PropTypes.object,
  };

  static defaultProps = {
    ...Component.defaultProps,
    navigationBarHidden: false,
  };

  constructor(props, context) {
    super(props, context);

    this.search = this.search.bind(this);
    this.renderUserCell = this.renderUserCell.bind(this);
    this.viewUser = this.viewUser.bind(this);

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      searchText: '',
      users: ds.cloneWithRows([]),
      lastSearch: 0,
      ds,
    };
  }

  componentDidMount() {
    this.search('hugocaillard');
  }

  renderUserCell(rowData) {
    return(
      <TouchableHighlight
        underlayColor={'#007aff'}
        onPress={() => this.viewUser(rowData)}
        userId={rowData.id}
      >
        {UserCell(rowData)}
      </TouchableHighlight>
    );
  }

  viewUser(user) {
    this.props.navigator.push({
      title: user.login,
      component: User,
      passProps: {
        user: user.login,
      },
    });
  }

  search(searchStr) {
    let now = Date.now();
    if (searchStr.length >= 2 && now - this.state.lastSearch > 1000) {
      this.setState({lastSearch: now});
      const users = getUsers(searchStr);
      if (!users) return;

      users
        .then((res) => res.text())
        .then((responseText) => {
          let items = JSON.parse(responseText).items;
          let users = this.state.ds.cloneWithRows(items);

          this.setState({users});
        })
        .catch((error) => {
          throw new Error(error);
        });

    }
  }

  render() {
    let { searchText, users } = this.state;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            value={searchText}
            placeholder={'Search Users'}
            onChangeText={this.search}
          />
        </View>
        <ListView
          dataSource={users}
          renderRow={this.renderUserCell}
        />
      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    backgroundColor: '#c9c9ce',
    padding: 8,
  },
  searchBar: {
    height: 28,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Home;
