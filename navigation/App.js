import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: Home
//   },
//   Contact: {
//     screen: Contact
//   },
//   About: {
//     screen: About
//   },
// },
//   {
//     navigationOptions: {
//       title: 'Navigation App',
//       headerStyle: {
//         backgroundColor: 'lightblue',
//       },
//       headerTintColor: 'red',
//       headerTitleStyle: {

//       }
//     }
//   }
// );
const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: Home
  },
  Contact: {
    screen: Contact
  },
  About: {
    screen: About
  },
},
  {
    tabBarOptions: {
      activeTintColor: 'red',
      inActiveTintCOlor: 'gray',
    },
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return <FontAwesome name="home" size={32} color={tintColor} />;
        }
        if (routeName === 'About') {
          return <FontAwesome name="question-circle" size={32} color={tintColor} />;
        }
        if (routeName === 'Contact') {
          return <MaterialIcons name="contact-phone" size={32} color={tintColor} />;
        }
      },
      title: 'Navigation App',
      headerStyle: {
        backgroundColor: 'lightblue',
      },
      headerTintColor: 'red',
      headerTitleStyle: {

      }
    })
  }
);

export default AppNavigator;

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Home />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
