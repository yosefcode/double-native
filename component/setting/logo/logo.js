import React, { useEffect, useState } from "react";
import { Text, View, Animated } from "react-native";
import logoStyles from "./logoStyles";
import AppLoading from "expo-app-loading";
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function Logo({ animatedTiming, animation }) {
  useEffect(() => {
    animatedTiming();
  }, [animation]);

  let [fontsLoaded] = useFonts({
    Lobster_400Regular,
  });

  const textStyle = {
    fontFamily: "Lobster_400Regular",
    color: animation.interpolate({
      inputRange: [0, 20, 50, 80, 100],
      outputRange: ["yellow", "orange", "red", "orange", "yellow"],
    }),
    fontSize: hp("12%"),
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={logoStyles.logo}>
        <Animated.Text style={{ ...textStyle }}> E </Animated.Text>
        <Animated.Text style={{ ...textStyle }}> L </Animated.Text>
        <Animated.Text style={{ ...textStyle }}> B </Animated.Text>
        <Animated.Text style={{ ...textStyle }}> U </Animated.Text>
        <Animated.Text style={{ ...textStyle }}> O </Animated.Text>
        <Animated.Text style={{ ...textStyle }}> D </Animated.Text>
      </View>
    );
  }
}

export default Logo;
