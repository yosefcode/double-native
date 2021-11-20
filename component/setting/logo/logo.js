import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import logoStyles from "./logoStyles";
import AppLoading from "expo-app-loading";
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";

function Logo() {
  let [fontsLoaded] = useFonts({
    Lobster_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={logoStyles.logo}>
        <Text
          style={{
            fontFamily: "Lobster_400Regular",
            color: "red",
            fontSize: 100,
            // fontWeight: "700",
          }}
        >
          {" "}
          E{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Lobster_400Regular",
            color: "yellow",
            fontSize: 100,
            // fontWeight: "700",
          }}
        >
          {" "}
          L{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Lobster_400Regular",
            color: "green",
            fontSize: 100,
            // fontWeight: "700",
          }}
        >
          {" "}
          B{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Lobster_400Regular",
            color: "red",
            fontSize: 100,
            // fontWeight: "700",
          }}
        >
          {" "}
          U{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Lobster_400Regular",
            color: "yellow",
            fontSize: 100,
            // fontWeight: "700",
          }}
        >
          {" "}
          O{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Lobster_400Regular",
            color: "green",
            fontSize: 100,
            // fontWeight: "700",
          }}
        >
          {" "}
          D{" "}
        </Text>
      </View>
    );
  }
}

export default Logo;
