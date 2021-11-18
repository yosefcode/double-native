import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Alert,
  Button,
} from "react-native";

import btns_startStyles from "./btns_startStyles";

function BtnsStart(props) {
  const {
    numfor,
    audioSuccess,
    audioError,
    small_large,
    timer,
    setTimer,
    hardTimer,
    setHardTimer,
    success_Point,
    setSuccess_Point,
    error_Point,
    setError_Point,
    point,
    setpoint,
    setIntervalval,
    start,
    clear_Interval,
    startInterval,
    end,
    disable,
    setDisable,
    disablePause,
    setDisablePause,
    valBtnPause,
    setValBtnPause,
    valBtnStart,
    setValBtnStart,
  } = props;
  return (
    <View style={btns_startStyles.container}>
      <TouchableOpacity
        style={btns_startStyles.btn}
        onPress={() => {
          setIntervalval();
          setValBtnPause("Pause");
          start();
        }}
      >
        <Text>{valBtnStart}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[btns_startStyles.btn, { opacity: disablePause ? 0.5 : 1 }]}
        onPress={() => {
          if (disable === false) {
            clear_Interval();
            setDisable(true);
            setValBtnPause("Start");
          } else {
            setValBtnPause("Pause");
            setDisable(false);
            startInterval();
          }
        }}
        disabled={disablePause}
        // style={{ opacity: 1 }}
      >
        <Text> {valBtnPause}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[btns_startStyles.btn, { opacity: disablePause ? 0.5 : 1 }]}
        onPress={() => end()}
        disabled={disablePause}
      >
        <Text>End Game</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BtnsStart;
