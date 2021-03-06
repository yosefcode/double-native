import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
} from "react-native";
import SettingStyles from "./settingStyles";
import Logo from "./logo/logo";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Setting({
  setSetting,
  numfor,
  setNumfor,
  setSmall_large,
  hardTimer,
  setHardTimer,
  setTimer,
  mute,
  setMute,
  end,
  setValBtnStart,
  animatedTiming,
  clearTimeoutAnimation,
  animation,
}) {
  const [error_Timer, setError_Timer] = useState(0);
  const [error_Numfor, setError_Numfor] = useState(0);

  // const setStorage = async () => {
  //   try {
  //     const setStorage = JSON.stringify({
  //       hardTimer: hardTimer,
  //       numfor: numfor,
  //       mute: mute,
  //     });
  //     await AsyncStorage.setItem("setting", setStorage);
  //     const setting = await AsyncStorage.getItem("setting");
  //     console.log(JSON.parse(setting));
  //   } catch (e) {
  //     // saving error
  //   }
  // };

  return (
    <View style={SettingStyles.container}>
      <ImageBackground
        source={require("../../img/background.png")}
        resizeMode="cover"
        style={SettingStyles.ImageBackground}
      >
        <View style={SettingStyles.name}>
          <Logo animatedTiming={animatedTiming} animation={animation} />
        </View>

        <View style={SettingStyles.timer}>
          <Image
            style={SettingStyles.gif}
            source={require("./stopwatch.gif")}
            resizeMode="contain"
          />

          <View style={SettingStyles.btns_timer}>
            <View
              style={{ opacity: hardTimer === 10 || hardTimer === 0 ? 1 : 0.4 }}
            >
              <TouchableOpacity
                onPress={() => {
                  setHardTimer(10);
                  setTimer(10);
                  setError_Timer(0);
                }}
                style={[
                  SettingStyles.btn_timer_up,
                  { borderColor: "red", borderWidth: error_Timer },
                ]}
              >
                <Text style={SettingStyles.txt_timer}>10</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{ opacity: hardTimer === 20 || hardTimer === 0 ? 1 : 0.4 }}
            >
              <TouchableOpacity
                onPress={() => {
                  setHardTimer(20);
                  setTimer(20);
                  setError_Timer(0);
                }}
                style={[
                  SettingStyles.btn_timer_down,
                  { borderColor: "red", borderWidth: error_Timer },
                ]}
              >
                <Text style={SettingStyles.txt_timer}>20</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{ opacity: hardTimer === 30 || hardTimer === 0 ? 1 : 0.4 }}
            >
              <TouchableOpacity
                onPress={() => {
                  setHardTimer(30);
                  setTimer(30);
                  setError_Timer(0);
                }}
                style={[
                  SettingStyles.btn_timer_up,
                  { borderColor: "red", borderWidth: error_Timer },
                ]}
              >
                <Text style={SettingStyles.txt_timer}>30</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={SettingStyles.num_card}>
          <TouchableOpacity
            onPress={() => {
              setNumfor(9);
              setSmall_large("33.3%");
              end();
              setError_Numfor(0);
              setValBtnStart("Start");
            }}
            style={SettingStyles.btn_img_box}
          >
            <View
              style={{
                opacity: numfor === 9 || numfor === 0 ? 1 : 0.4,
                borderColor: "red",
                borderWidth: error_Numfor,
                borderRadius: 15,
              }}
            >
              <Image
                style={SettingStyles.img_box}
                source={require("./img-easy.png")}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setNumfor(16);
              setSmall_large("25%");
              end();
              setError_Numfor(0);
              setValBtnStart("Start");
            }}
            style={SettingStyles.btn_img_box}
          >
            <View
              style={{
                opacity: numfor === 16 || numfor === 0 ? 1 : 0.4,
                borderColor: "red",
                borderWidth: error_Numfor,
                borderRadius: 15,
              }}
            >
              <Image
                style={SettingStyles.img_box}
                source={require("./16img.png")}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={SettingStyles.gling}>
          <TouchableOpacity
            onPress={() => {
              mute === true ? setMute(false) : setMute(true);
            }}
          >
            {mute === true ? (
              <Ionicons name="notifications-off" size={60} color="white" />
            ) : (
              <Ionicons name="notifications" size={60} color="white" />
            )}
          </TouchableOpacity>
        </View>

        <View
          style={[
            SettingStyles.view_btn_play,
            { opacity: hardTimer < 5 || numfor < 5 ? 0.5 : 1 },
          ]}
        >
          {/* <TouchableOpacity
            onPress={() => {
              // if (hardTimer < 5) {
              //   setError_Timer(3);
              // }
              // if (numfor < 5) {
              //   setError_Numfor(3);
              // }
              // if (numfor > 5 && hardTimer > 5) {
              setStorage();
              // }
            }}
            style={SettingStyles.btn_play}
          >
            <Text style={{ fontSize: 20, fontWeight: "700" }}>remmber my</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => {
              if (hardTimer < 5) {
                setError_Timer(3);
              }
              if (numfor < 5) {
                setError_Numfor(3);
              }
              if (numfor > 5 && hardTimer > 5) {
                setSetting(false);
                clearTimeoutAnimation();
              }
            }}
            style={SettingStyles.btn_play}
          >
            <Text style={{ fontSize: 20, fontWeight: "700" }}> PLAY</Text>
            <AntDesign name="doubleleft" size={24} color="black" />
            <AntDesign name="doubleleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Setting;
