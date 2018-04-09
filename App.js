import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { Image } from 'react-native';

import { HomeScreen } from './home';
import { ProfileScreen } from './profile';
import { palette, logo } from './styles';

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
}, {
  navigationOptions: {
    initialRouteName: 'Home',
    headerStyle: { backgroundColor: palette.primary },
    headerTintColor: '#FFF',
    headerLeft: (
      <Image source={require('./app_logo.png')} style={logo} />
    ),
  },
});

const App = DrawerNavigator({
  App: { screen: RouteStack },
});

export default App;
