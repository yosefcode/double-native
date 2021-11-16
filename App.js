import React from "react";
import Home from "./component/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="Home" component={Home}/> */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ orientation: "landscape_right" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
