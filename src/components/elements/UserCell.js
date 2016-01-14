import React from 'react-native';

const {
  StyleSheet,
  View,
  Text,
  Image,
} = React;


export default function UserCell(rowData) {
  return (
    <View>
      <View style={styles.row}>
        <Image
          style={styles.picture}
          source={{uri: rowData.avatar_url}}
        />
        <Text style={styles.text}>
          {rowData.login}
        </Text>
      </View>
      <View style={styles.separator} />
    </View>
  );
}

let styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: 60,
  },
  separator: {
    height: 1,
    backgroundColor: '#cccccc',
  },
  text: {
    flex: 1,
    fontSize: 18,
  },
  picture: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
});
