import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from "react-native";
import BoxesStyles from "./boxesStyles";
import Point_Timer from "./point_timer/point_timer";
import Logo from "./logo/logo";
import BtnsStart from "./btns_start/btns_start";
import { useKeepAwake } from "expo-keep-awake";
import { Shadow } from "react-native-shadow-2";

function Boxes({
  setSetting,
  small_large,
  timer,
  error_Point,
  success_Point,
  listBox2,
  listBox1,
  gifSuccess,
  gifError,
  setIntervalval,
  disable,
  setDisable,
  disablePause,
  valBtnPause,
  setValBtnPause,
  mute,
  setMute,
  start,
  clear_Interval,
  startInterval,
  end,
  error,
  success,
  valBtnStart,
  animatedTiming,
  clearTimeoutAnimation,
  animation,
  setCorrectAnswer,
  correctAnswer,
  animationImage,
}) {
  useKeepAwake();

  const testBox1 = (imgClick) => {
    const foundBox2 = listBox2.find((images) => images === imgClick);
    for (var a = 0; a < listBox2.length; a++) {
      let testAnswer = listBox1.find((s) => s === listBox2[a]);
      if (testAnswer) {
        setCorrectAnswer(testAnswer);
      }
    }
    foundBox2 ? success() : error();
  };

  const testBox2 = (imgClick) => {
    const foundBox1 = listBox1.find((images) => images === imgClick);
    for (var a = 0; a < listBox2.length; a++) {
      let testAnswer = listBox1.find((s) => s === listBox2[a]);
      if (testAnswer) {
        setCorrectAnswer(testAnswer);
      }
    }

    foundBox1 ? success() : error();
  };

  return (
    <View style={BoxesStyles.container}>
      <ImageBackground
        source={require("../../img/background.png")}
        resizeMode="cover"
        style={BoxesStyles.ImageBackground}
      >
        <View style={BoxesStyles.name}>
          <Logo
            setSetting={setSetting}
            clear_Interval={clear_Interval}
            setDisable={setDisable}
            setValBtnPause={setValBtnPause}
            mute={mute}
            setMute={setMute}
            animatedTiming={animatedTiming}
            clearTimeoutAnimation={clearTimeoutAnimation}
            animation={animation}
          />
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

          <View style={BoxesStyles.box1}>
            <Shadow
              distance={20}
              startColor={"#8c8c8c"}
              // finalColor={"#ffffff"}
              offset={[0, 0]}
            >
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
                          {
                            opacity: disable ? 0.3 : 1,
                            width: small_large,
                            height: small_large,
                          },
                        ]}
                        disabled={disable}
                      >
                        {!correctAnswer ? (
                          <Image
                            style={BoxesStyles.image}
                            key={imgClick}
                            source={imgClick}
                            resizeMode="contain"
                          />
                        ) : imgClick === correctAnswer ? (
                          <Animated.Image
                            style={[
                              BoxesStyles.image,
                              {
                                transform: [
                                  {
                                    scaleX: animationImage.interpolate({
                                      inputRange: [0, 1],
                                      outputRange: [1, 1.5],
                                    }),
                                  },
                                  {
                                    scaleY: animationImage.interpolate({
                                      inputRange: [0, 1],
                                      outputRange: [1, 1.5],
                                    }),
                                  },
                                ],
                              },
                            ]}
                            key={imgClick}
                            source={imgClick}
                            resizeMode="contain"
                          />
                        ) : (
                          <Image
                            style={[
                              BoxesStyles.image,
                              {
                                opacity: 0.4,
                              },
                            ]}
                            key={imgClick}
                            source={imgClick}
                            resizeMode="contain"
                          />
                        )}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ImageBackground>
            </Shadow>
          </View>

          <Point_Timer
            timer={timer}
            error_Point={error_Point}
            success_Point={success_Point}
          />

          <View style={BoxesStyles.box2}>
            <Shadow
              distance={20}
              startColor={"#8c8c8c"}
              // finalColor={"#ffffff"}
              offset={[0, 0]}
            >
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
                          {
                            opacity: disable ? 0.3 : 1,
                            width: small_large,
                            height: small_large,
                          },
                        ]}
                        disabled={disable}
                      >
                        {!correctAnswer ? (
                          <Image
                            style={BoxesStyles.image}
                            key={imgClick}
                            source={imgClick}
                            resizeMode="contain"
                          />
                        ) : imgClick === correctAnswer ? (
                          <Animated.Image
                            style={[
                              BoxesStyles.image,
                              {
                                transform: [
                                  {
                                    scaleX: animationImage.interpolate({
                                      inputRange: [0, 1],
                                      outputRange: [1, 1.5],
                                    }),
                                  },
                                  {
                                    scaleY: animationImage.interpolate({
                                      inputRange: [0, 1],
                                      outputRange: [1, 1.5],
                                    }),
                                  },
                                ],
                              },
                            ]}
                            key={imgClick}
                            source={imgClick}
                            resizeMode="contain"
                          />
                        ) : (
                          <Image
                            style={[
                              BoxesStyles.image,
                              {
                                opacity: 0.4,
                              },
                            ]}
                            key={imgClick}
                            source={imgClick}
                            resizeMode="contain"
                          />
                        )}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ImageBackground>
            </Shadow>
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
            valBtnPause={valBtnPause}
            setValBtnPause={setValBtnPause}
            valBtnStart={valBtnStart}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default Boxes;
