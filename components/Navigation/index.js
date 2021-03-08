import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#000",
          },
        }}
      >
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Navigator>
    </>
  );
};

export default RootNavigator;
