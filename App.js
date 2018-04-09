import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { Image } from 'react-native';

import { HomeScreen, ProfileScreen } from './views';
import { palette, logo } from './styles';
import { Drawer } from './components';

const paths = {
  Home: {
    screen: HomeScreen,
    path: 'home',
    navigationOptions: () => ({
      title: "Home",
    }),
  },
  Profile: {
    screen: ProfileScreen,
    path: 'profile',
    navigationOptions: () => ({
      title: "Profile",
    }),
  },
};

const RouteStack = StackNavigator(paths, {
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
  StuffAndThings: {
    screen: RouteStack,
    navigationOptions: () => ({
      title: "Stuff and Things",
    }),
  },
}, {
  contentComponent: props => <Drawer routes={paths} {...props} />,
});

export default App;
