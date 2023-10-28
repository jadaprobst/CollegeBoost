import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './MyTabs';
import AppNavigator from './AppNavigator';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import pointsReducer from './points.js';

const rootReducer = combineReducers({
  points: pointsReducer,
});

const store = createStore(rootReducer);

function App() {  
  return(
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}

export default App;