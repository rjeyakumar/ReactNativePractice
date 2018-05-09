import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="Contact" onPress={() => this.props.navigation.navigate('Contact', { name: 'Photon' })} />
        <Button title="About" onPress={() => this.props.navigation.navigate('About')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#000',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
