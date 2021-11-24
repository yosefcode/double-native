import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Text, View } from "react-native";
import Point_TimerStyles from "./point_timerStyles";

function Point_Timer({ timer, success_Point, error_Point }) {
  let [fontsLoaded] = useFonts({
    digital: require("../../../assets/digital.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={Point_TimerStyles.header}>
        <View style={Point_TimerStyles.like}>
          <AntDesign name="like1" size={60} color="green" />

          <Text style={Point_TimerStyles.success_Point}>{success_Point}</Text>
        </View>
        <View style={Point_TimerStyles.timer}>
          <Text
            style={{
              fontFamily: "digital",
              fontSize: 50,
              color: "white",
            }}
          >
            {timer}
          </Text>
        </View>
        <View style={Point_TimerStyles.like}>
          <AntDesign name="dislike1" size={60} color="red" />
          <Text style={Point_TimerStyles.error_Point}>{error_Point}</Text>
        </View>
      </View>
    );
  }
}

export default Point_Timer;
