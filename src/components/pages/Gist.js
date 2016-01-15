import React, { Component, PropTypes } from 'react-native';
import * as moment from 'moment';

const {
  StyleSheet,
  View,
  WebView,
  ScrollView,
  Modal,
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
    navigationBarHidden: false,
  };

  constructor(props, context) {
    super(props, context);

    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      animated: true,
      transparent: false,
      visible: false,
    };
  }

  toggleModal() {
    this.setState({visible: !this.state.visible});
  }

  render() {
    const modal = this.state;

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
            <Text style={styles.username}>
              {this.props.username}
            </Text>
          </View>
          <Text style={styles.description}>
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
          <View style={styles.btnContainer}>
            <Text
              onPress={this.toggleModal}
              style={styles.btn}
            >
              View on the Web
            </Text>
          </View>
        </View>
        <Modal
          animated={modal.animated}
          transparent={modal.transparent}
          visible={modal.visible}
        >
          <View style={styles.modal}>
            <Text onPress={this.toggleModal} style={styles.closeBtn}>
              Close
            </Text>
            <WebView
              automaticallyAdjustContentInsets={false}
              url={gist.html_url}
              style={styles.webView}
            />
          </View>
        </Modal>
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
    fontWeight: 'bold',
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
  bold: {
    fontWeight: 'bold',
  },
  btnContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  btn: {
    borderColor: '#007aff',
    color: '#007aff',
    borderWidth: 2,
    borderRadius: 4,
    padding: 20,
    paddingTop: 12,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  modal: {
    paddingTop: 20,
    borderColor: '#cccccc',
    borderTopWidth: 1,
    flex: 1,
  },
  closeBtn: {
    padding: 6,
    paddingTop: 4,
    paddingBottom: 10,
    color: '#007aff',
    fontSize: 16,
  },
  webView: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
});

export default Gist;
