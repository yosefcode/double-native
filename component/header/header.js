import React, { useState, useEffect } from "react";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { ImageBackground, Text, View } from "react-native";
import HeaderStyles from "./HeaderStyles";

function Header({
  setSmall_large,
  audioSuccess,
  audioError,
  setNumfor,
  point,
  setpoint,
  timer,
  setTimer,
  hardTimer,
  setHardTimer,
  numfor,
  success_Point,
  setSuccess_Point,
  error_Point,
  setError_Point,
}) {
  const [audio, setAudio] = useState(true);
  const [loaded] = useFonts({
    digital: require("../../assets/digital-7 (italic).ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={HeaderStyles.header}>
      <View style={HeaderStyles.like}>
        <AntDesign name="like1" size={50} color="green" />
        <Text style={HeaderStyles.success_Point}>{success_Point}</Text>
      </View>
      <View style={HeaderStyles.timer}>
        <Text
          style={{
            fontFamily: "digital",
            fontSize: "6vw",
            color: "white",
            // fontWeight: 700,
          }}
        >
          {timer}
        </Text>
      </View>
      <View style={HeaderStyles.like}>
        <AntDesign name="dislike1" size={50} color="red" />
        <Text style={HeaderStyles.error_Point}>{error_Point}</Text>
      </View>
    </View>
    /* <div>
        {audio === true ? (
          // audioError.volume = 0;
          // audioSuccess.volume = 0;
          <NotificationsIcon
            style={{
              fontSize: "5vw",
            }}
            className="iconbip"
            onClick={() => {
              setAudio(false);
              audioError.volume = 0;
              audioSuccess.volume = 0;
            }}
          />
        ) : (
          <NotificationsOffIcon
            style={{
              fontSize: "5vw",
            }}
            className="iconbip"
            onClick={() => {
              audioError.volume = 1;
              audioSuccess.volume = 1;
              setAudio(true);
            }}
          />
        )}
      </div> */
  );
}

export default Header;
