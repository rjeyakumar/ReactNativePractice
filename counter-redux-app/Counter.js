import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { incrementActionCreator, decrementActionCreator } from './actionCreators';

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { incrementHandler, counter, decrementHandler} = this.props;
    return (
      <View style={styles.container}>
        <Button title="Increment" onPress={incrementHandler} />
        <Text style={styles.counterText}>{counter}</Text>
        <Button title="Decrement" onPress={decrementHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 30,
    marginLeft: 5,
    marginRight: 5,
  },
});

function mapStateToProps(state) {
  const { counter } = state;
  return {
    counter,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    incrementHandler: () => dispatch(incrementActionCreator()),
    decrementHandler: () => dispatch(decrementActionCreator()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
