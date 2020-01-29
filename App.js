import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import mainScreen from './components/mainScreen'
import ChatScreen1 from './components/ChatScreen1'
import ChatScreen2 from './components/ChatScreen2'
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <View>
//         <Text> App </Text>
//       </View>
//     );
//   }
// }
const AppNavigator = createStackNavigator({
  Home:{screen:mainScreen},
  ChatScreen1:{screen:ChatScreen1},
  ChatScreen2:{screen:ChatScreen2}
   
  },
  
  {

    //By default Home Screen will be redirected

    initialRouteName: 'Home',
    
    defaultNavigationOptions: {
     // title: 'App',
      headerShown: false,
     
    }
});

export default createAppContainer(AppNavigator);