import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import AuthNavigator from './src/navigations/AuthNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
