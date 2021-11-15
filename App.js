import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ImageBackground, Text, View } from "react-native";
import SideBar from "./component/sidebar/sidebar";
import Boxes from "./component/boxes/boxes";
import AppStyles from "./AppStyles";
import Header from "./component/header/header";

export default function App() {
  const [point, setpoint] = useState();
  const [numfor, setNumfor] = useState(9);
  const [small_large, setSmall_large] = useState("boxsmall");
  // const [audioSuccess] = useState(new Audio("sound/success.mp3"));
  // const [audioError] = useState(new Audio("sound/error.mp3"));
  const [hardTimer, setHardTimer] = useState(10);
  const [timer, setTimer] = useState(0);
  const [success_Point, setSuccess_Point] = useState(0);
  const [error_Point, setError_Point] = useState(0);

  return (
    <View style={AppStyles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("./img/background.png")}
        resizeMode="cover"
        style={AppStyles.ImageBackground}
        // imageStyle={{ opacity: 0.9 }}
      >
        <Boxes
          numfor={numfor}
          small_large={small_large}
          // audioError={audioError}
          // audioSuccess={audioSuccess}
          setpoint={setpoint}
          point={point}
          timer={timer}
          setTimer={setTimer}
          hardTimer={hardTimer}
          setHardTimer={setHardTimer}
          error_Point={error_Point}
          setError_Point={setError_Point}
          success_Point={success_Point}
          setSuccess_Point={setSuccess_Point}
        />
      </ImageBackground>
    </View>
  );
}
