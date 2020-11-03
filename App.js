import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import * as firebase from 'firebase';

import { firebaseConfig } from './config/firebase.js';
import AuthNavigator from './src/navigation/AuthNavigator';
import HomeScreen from './src/screens/HomeScreen';


firebase.initializeApp(firebaseConfig);
export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthNavigator,
      App: HomeScreen,
    },
    {
      initialRouteName: 'Auth'
    }
  )
);

