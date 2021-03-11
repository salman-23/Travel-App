// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

//added --->

// yarn add react-devtools
// yarn add native-base styled-components axios jwt-decode react-redux redux redux-thunk @react-navigation/stack @react-navigation/native
//yarn add @react-native-async-storage/async-storage
// yarn add react-native-datepicker
// -----<
