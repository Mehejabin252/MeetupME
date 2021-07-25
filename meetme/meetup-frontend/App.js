import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import { HomeScreen } from './src/screens';
import { cachedFonts } from './helpers';

EStyleSheet.build(Colors);

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }
  render() {
    return <HomeScreen />;
  }
}
