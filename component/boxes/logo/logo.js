import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import logoStyles from "./logoStyles";
import AppLoading from "expo-app-loading";
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";

function Logo({ setSetting }) {
  let [fontsLoaded] = useFonts({
    Lobster_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={logoStyles.name}>
        <TouchableOpacity
          onPress={() => {
            setSetting(true);
          }}
        >
          <Ionicons name="md-settings" size={30} color="white" />
        </TouchableOpacity>

        <Text
          style={{
            fontFamily: "Lobster_400Regular",
            color: "red",
            fontSize: 45,
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
            fontSize: 45,
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
            fontSize: 45,
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
            fontSize: 45,
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
            fontSize: 45,
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
            fontSize: 45,
            // fontWeight: "700",
          }}
        >
          {" "}
          D{" "}
        </Text>
        <Ionicons name="notifications" size={30} color="white" />
        <Ionicons name="notifications-off" size={30} color="white" />
      </View>
    );
  }
}

export default Logo;
