/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStackNavigator } from './src/navigator';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import AppCombineReducers from "./src/common/reducers";

const store = createStore((AppCombineReducers), applyMiddleware(thunk, logger));

export default function App() {
   return (
      <Provider 
         store={store}>
         <NavigationContainer>
            <HomeStackNavigator/>
         </NavigationContainer>
      </Provider>
   )
}