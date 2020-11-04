import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import * as firebase from 'firebase';

import { firebaseConfig } from './config/firebase.js';
// import AuthNavigator from './src/navigation/AuthNavigator';
import HomeScreen from './src/screens/HomeScreen';
import AccountScreen from './src/screens/AccountScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import BrowseScreen from './src/screens/BrowseScreen';
import ConcertScreen from './src/screens/ConcertScreen';
import LiveShowScreen from './src/screens/LiveShowScreen';
import SportsScreen from './src/screens/SportsScreen';
import TicketScreen from './src/screens/TicketScreen';
import CompareScreen from './src/screens/CompareScreen';



firebase.initializeApp(firebaseConfig);

const loginFlow = createSwitchNavigator({
  SignUp: SignUpScreen,
  SignIn: SignInScreen
})

const Home = createStackNavigator({
  Home: HomeScreen,
  Concert: ConcertScreen,
  LiveShow: LiveShowScreen,
  Sports: SportsScreen
});



  const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    Home,
    Browse: BrowseScreen,
    Compare: CompareScreen,
    Tickets: TicketScreen,
    Account: AccountScreen,

  }),
});

const App = createAppContainer(switchNavigator);


export default App;

// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       Auth: AuthNavigator,
//       App: HomeScreen,
//     },
//     {
//       initialRouteName: 'Auth'
//     }
//   )
// );

