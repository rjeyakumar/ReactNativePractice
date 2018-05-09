import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class About extends React.Component {
  static navigationOptions = {
    title: 'About'
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="Home" onPress={() => this.props.navigation.navigate('Home')} />
        <Button title="Contact" onPress={() => this.props.navigation.navigate('Contact')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
