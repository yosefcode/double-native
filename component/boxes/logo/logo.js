import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, Animated } from "react-native";
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
  animatedTiming,
  clearTimeoutAnimation,
  animation,
}) {
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
    fontSize: 45,
  };

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
              clearTimeoutAnimation();
            }}
          >
            <Ionicons name="md-settings" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <View style={logoStyles.logo}>
          <Animated.Text style={{ ...textStyle }}> E </Animated.Text>
          <Animated.Text style={{ ...textStyle }}> L </Animated.Text>
          <Animated.Text style={{ ...textStyle }}> B </Animated.Text>
          <Animated.Text style={{ ...textStyle }}> U </Animated.Text>
          <Animated.Text style={{ ...textStyle }}> O </Animated.Text>
          <Animated.Text style={{ ...textStyle }}> D </Animated.Text>
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
