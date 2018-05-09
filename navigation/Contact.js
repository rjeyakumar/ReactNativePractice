import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Contact extends React.Component {
  static navigationOptions = {
    title: 'Contact'
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>{this.props.navigation.state.params.name}</Text> */}
        <Button title="Home" onPress={() => this.props.navigation.navigate('Home')} />
        <Button title="About" onPress={() => this.props.navigation.navigate('About')} />
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
