import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import logoStyles from "./logoStyles";
import AppLoading from "expo-app-loading";
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";

function Logo({
  setSetting,
  clear_Interval,
  setDisable,
  setValBtnPause,
  mute,
  setMute,
}) {
  let [fontsLoaded] = useFonts({
    Lobster_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={logoStyles.headr}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setSetting(true);
              clear_Interval();
              setDisable(true);
              setValBtnPause("Start");
            }}
          >
            <Ionicons name="md-settings" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <View style={logoStyles.logo}>
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
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              mute === true ? setMute(false) : setMute(true);
            }}
          >
            {mute === true ? (
              <Ionicons name="notifications-off" size={30} color="white" />
            ) : (
              <Ionicons name="notifications" size={30} color="white" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Logo;
