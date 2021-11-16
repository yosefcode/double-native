import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import BoxesStyles from "./boxesStyles";
import Point_Timer from "../point_timer/point_timer";
import Logo from "./logo/logo";
import BtnsStart from "./btns_start/btns_start";

function Boxes({
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
  const testBox1 = (imgClick) => {
    const foundBox2 = listBox2.find((images) => images === imgClick);
    foundBox2 ? success() : error();
  };

  const testBox2 = (imgClick) => {
    const foundBox1 = listBox1.find((images) => images === imgClick);
    foundBox1 ? success() : error();
  };

  return (
    <View style={BoxesStyles.container}>
      <ImageBackground
        source={require("../../img/background.png")}
        resizeMode="cover"
        style={BoxesStyles.ImageBackground}
        // imageStyle={{ opacity: 0.9 }}
      >
        <View style={BoxesStyles.name}>
          <Logo setSetting={setSetting} />
        </View>

        <View style={BoxesStyles.boxs}>
          {gifSuccess && (
            <View style={BoxesStyles.view_gif}>
              <Image
                style={BoxesStyles.gif}
                source={require("./Line Stickers & Themes.gif")}
                resizeMode="contain"
              />
            </View>
          )}

          {gifError && (
            <View style={BoxesStyles.view_gif}>
              <Image
                style={BoxesStyles.gif}
                source={require("./thumbs-down-emoji-unscreen.gif")}
                resizeMode="contain"
              />
            </View>
          )}

          {/* <Button title={"2-Button Alert"} onPress={createThreeButtonAlert} /> */}
          <View style={BoxesStyles.box1}>
            <ImageBackground
              source={require("./old_map.png")}
              resizeMode="stretch"
              style={BoxesStyles.ImageBackground}
              imageStyle={{ borderRadius: 10 }}
            >
              <View style={BoxesStyles.view_images}>
                {listBox1.map((imgClick, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        testBox1(imgClick);
                      }}
                      key={index}
                      style={[
                        BoxesStyles.view_image,
                        { opacity: disable ? 0.3 : 1 },
                      ]}
                      disabled={disable}
                    >
                      <Image
                        style={BoxesStyles.image}
                        key={imgClick}
                        source={imgClick}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ImageBackground>
          </View>

          <Point_Timer
            timer={timer}
            error_Point={error_Point}
            success_Point={success_Point}
          />

          <View style={BoxesStyles.box2}>
            <ImageBackground
              source={require("./old_map.png")}
              resizeMode="stretch"
              style={BoxesStyles.ImageBackground}
              imageStyle={{ borderRadius: 10 }}
            >
              <View style={BoxesStyles.view_images}>
                {listBox2.map((imgClick, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        testBox2(imgClick);
                      }}
                      key={index}
                      style={[
                        BoxesStyles.view_image,
                        { opacity: disable ? 0.3 : 1 },
                      ]}
                      disabled={disable}
                    >
                      <Image
                        style={BoxesStyles.image}
                        key={imgClick}
                        source={imgClick}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ImageBackground>
          </View>
        </View>

        <View style={BoxesStyles.btns_start}>
          <BtnsStart
            setIntervalval={setIntervalval}
            start={start}
            clear_Interval={clear_Interval}
            startInterval={startInterval}
            end={end}
            disable={disable}
            setDisable={setDisable}
            disablePause={disablePause}
            setDisablePause={setDisablePause}
            valBtnPause={valBtnPause}
            setValBtnPause={setValBtnPause}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default Boxes;
