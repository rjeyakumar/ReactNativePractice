import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './reducers';

const store = createStore(counterReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Counter />
        </View>
      </Provider>
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
