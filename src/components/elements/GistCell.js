import React from 'react-native';

const {
  StyleSheet,
  View,
  Text,
} = React;


export default function GistCell(rowData) {
  let { files } = rowData;

  return (
    <View>
      <View style={styles.separator} />
      <View style={styles.row}>
        <Text style={styles.description}>
          {rowData.description || 'No description'}
        </Text>
        <Text style={styles.text}>
          Files: {'\n'}
        </Text>
        <Text style={styles.filesList}>
          {Object.keys(files).map(function(key, i){
            return (
              <Text key={i}>
                {files[key].filename} -
                {files[key].language}{'\n'}
              </Text>
            );
          })}
        </Text>
      </View>
    </View>
  );
}

let styles = StyleSheet.create({
  row: {
    padding: 10,
    paddingBottom: 4,
  },
  separator: {
    height: 1,
    backgroundColor: '#cccccc',
  },
  description: {
    marginBottom: 14,
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: '#444444',
    marginBottom: 0,
  },
  filesList: {
    marginTop: -10,
  },
});
