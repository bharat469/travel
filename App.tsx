import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import Navigation from './src/navigation/navigation';
import store from './src/redux/store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.allApp}>
        <StatusBar />
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  allApp: {
    flex: 1,
  },
});

export default App;
