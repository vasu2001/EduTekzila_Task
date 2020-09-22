import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {MainNavigator} from './src/navigations/MainNavigator';
import MainReducer from './src/redux/reducer';
import {storeInterface} from './src/redux/utils';

const initialStore: storeInterface = {
  isLoggedIn: false,
  user: null,
  loading: false,
};

const store = createStore(MainReducer, initialStore);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
