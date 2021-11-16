import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Text,
} from "react-native";
import SettingStyles from "./settingStyles";
import Logo from "../boxes/logo/logo";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

function Setting({
  setting,
  setSetting,
  numfor,
  setNumfor,
  small_large,
  setSmall_large,
  hardTimer,
  setHardTimer,
  timer,
  setTimer,
  error_Point,
  setError_Point,
  success_Point,
  setSuccess_Point,
  listBox2,
  setListBox2,
  listBox1,
  setListBox1,
  gifSuccess,
  setGifSuccess,
  gifError,
  setGifError,
  intervalval,
  setIntervalval,
  startError,
  setStartError,
  disable,
  setDisable,
  disablePause,
  setDisablePause,
  valBtnPause,
  setValBtnPause,
  // audioError,
  // audioSuccess,
  start,
  clear_Interval,
  startInterval,
  end,
  error,
  success,
}) {
  return (
    <View style={SettingStyles.container}>
      <ImageBackground
        source={require("../../img/background.png")}
        resizeMode="cover"
        style={SettingStyles.ImageBackground}
        // imageStyle={{ opacity: 0.9 }}
      >
        <View style={SettingStyles.name}>
          <Logo />
        </View>

        <Ionicons name="hourglass-outline" size={70} color="white" />
        <TouchableOpacity
          onPress={() => {
            setHardTimer(10);
            setTimer(10);
          }}
        >
          <Text
            style={{
              backgroundColor: "white",
              width: 50,
              height: 50,
              borderRadius: 50,
              fontWeight: "700",
              fontSize: 40,
              // justifyContent: "center",
              // alignItems: "center",
              textAlign: "center",
            }}
          >
            10
          </Text>
        </TouchableOpacity>
        <FontAwesome5 name="stopwatch" size={60} color="white" />
        <MaterialCommunityIcons name="dice-d10" size={60} color="white" />
        <TouchableOpacity
          onPress={() => {
            setHardTimer(20);
            setTimer(20);
          }}
        >
          <Text>20</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setHardTimer(30);
            setTimer(30);
          }}
        >
          <Text>30</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setNumfor(9);
            setSmall_large("boxsmall");
            end();
            // setSuccess_Point(0);
            // setError_Point(0);
          }}
        >
          <Text> 9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setNumfor(16);
            setSmall_large("boxsmall");
            end();

            // setSuccess_Point(0);
            // setError_Point(0);
          }}
        >
          <Text> 16</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSetting(false);
          }}
        >
          <Text> 1דגד6</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default Setting;
