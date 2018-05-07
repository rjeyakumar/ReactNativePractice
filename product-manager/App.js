import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from './ProductList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ProductList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
