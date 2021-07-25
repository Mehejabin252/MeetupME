import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles/LoadingScreen';

const LoadingScreen = () => {
  // eslint-disable-next-line no-unused-expressions
  <View style={styles.root}>
    <ActivityIndicator  
      size="large"
    />
  </View>;
};

export default LoadingScreen;
