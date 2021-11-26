import React, { useState, useEffect } from "react";
import { View, Animated, StatusBar } from "react-native";
import Boxes from "./boxes/boxes";
import Setting from "./setting/setting";
import { Audio } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Home() {
  const [setting, setSetting] = useState(true);
  const [numfor, setNumfor] = useState(0);
  const [small_large, setSmall_large] = useState("boxsmall");
  const [hardTimer, setHardTimer] = useState(0);
  const [timer, setTimer] = useState(0);
  const [success_Point, setSuccess_Point] = useState(0);
  const [error_Point, setError_Point] = useState(0);
  const [listBox1, setListBox1] = useState([]);
  const [listBox2, setListBox2] = useState([]);
  const [gifSuccess, setGifSuccess] = useState(false);
  const [intervalval, setIntervalval] = useState();
  const [gifError, setGifError] = useState(false);
  const [disable, setDisable] = useState(false);
  const [disablePause, setDisablePause] = useState(true);
  const [valBtnPause, setValBtnPause] = useState("Pause");
  const [valBtnStart, setValBtnStart] = useState("Start");
  const [mute, setMute] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [timeoutAnimation, setTimeoutAnimation] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();

  const imageNames = [
    require("../img/1.png"),
    require("../img/2.png"),
    require("../img/3.png"),
    require("../img/4.png"),
    require("../img/5.png"),
    require("../img/6.png"),
    require("../img/7.png"),
    require("../img/8.png"),
    require("../img/9.png"),
    require("../img/10.png"),
    require("../img/11.png"),
    require("../img/12.png"),
    require("../img/13.png"),
    require("../img/14.png"),
    require("../img/15.png"),
    require("../img/16.png"),
    require("../img/17.png"),
    require("../img/18.png"),
    require("../img/19.png"),
    require("../img/20.png"),
    require("../img/21.png"),
    require("../img/22.png"),
    require("../img/23.png"),
    require("../img/24.png"),
    require("../img/25.png"),
    require("../img/26.png"),
    require("../img/27.png"),
    require("../img/28.png"),
    require("../img/29.png"),
    require("../img/30.png"),
    require("../img/31.png"),
    require("../img/32.png"),
    require("../img/33.png"),
    require("../img/34.png"),
    require("../img/35.png"),
    require("../img/36.png"),
    require("../img/37.png"),
    require("../img/38.png"),
    require("../img/39.png"),
    require("../img/40.png"),
    require("../img/41.png"),
    require("../img/42.png"),
    require("../img/43.png"),
    require("../img/44.png"),
    require("../img/45.png"),
    require("../img/46.png"),
    require("../img/47.png"),
    require("../img/48.png"),
    require("../img/49.png"),
    require("../img/50.png"),
    require("../img/52.png"),
    require("../img/53.png"),
    require("../img/54.png"),
    require("../img/55.png"),
    require("../img/56.png"),
    require("../img/57.png"),
    require("../img/58.png"),
    require("../img/59.png"),
    require("../img/60.png"),
  ];

  const TimeoutAnimation = () => {
    var timeout = setTimeout(() => {
      setAnimation(new Animated.Value(0));
    }, 10000);
    setTimeoutAnimation(timeout);
  };

  const clearTimeoutAnimation = () => {
    clearTimeout(timeoutAnimation);
  };

  const animatedTiming = () => {
    Animated.timing(animation, {
      toValue: 100,
      duration: 10000,
      useNativeDriver: false,
    }).start();
    TimeoutAnimation();
  };

  async function playSoundSuccess() {
    const { sound } = await Audio.Sound.createAsync(
      require("./sound/success.mp3")
    );
    await sound.playAsync();
  }

  async function playSoundError() {
    const { sound } = await Audio.Sound.createAsync(
      require("./sound/error.mp3")
    );
    await sound.playAsync();
  }
  const startInterval = () => {
    var interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    setIntervalval(interval);
  };

  const clear_Interval = () => {
    clearInterval(intervalval);
  };

  useEffect(() => {
    if (numfor > 5) {
      loadBox1();
      loadBox2();
    }
  }, [numfor]);

  useEffect(() => {
    if (timer === -1) {
      for (var a = 0; a < listBox2.length; a++) {
        let testAnswer = listBox1.find((s) => s === listBox2[a]);
        if (testAnswer) {
          setCorrectAnswer(testAnswer);
        }
      }

      error();
    }
  }, [timer, setTimer]);

  const start = () => {
    setDisable(false);
    clear_Interval();
    setSuccess_Point(0);
    setError_Point(0);
    loadBox1();
    loadBox2();
    setTimer(hardTimer);
    startInterval();
    setDisablePause(false);
    setValBtnStart("New Game");
  };
  const end = () => {
    setDisablePause(true);
    setDisable(true);
    clear_Interval();
    setSuccess_Point(0);
    setError_Point(0);
    loadBox1();
    loadBox2();
    setTimer(hardTimer);
    setValBtnPause("Pause");
  };

  const success = () => {
    setSuccess_Point(success_Point + 1);
    setTimer(hardTimer);
    clear_Interval();
    setGifSuccess(true);
    setTimeout(function () {
      setCorrectAnswer();
      loadBox1();
      loadBox2();
      setGifSuccess(false);
      startInterval();
    }, 2000);
    if (!mute) {
      playSoundSuccess();
    }
  };

  const error = () => {
    setTimer(hardTimer);
    setError_Point(error_Point + 1);
    clear_Interval();
    setGifError(true);
    setTimeout(function () {
      setCorrectAnswer();
      loadBox1();
      loadBox2();
      setGifError(false);
      startInterval();
    }, 2000);
    if (!mute) {
      playSoundError();
    }
  };

  var same = imageNames[Math.floor(Math.random() * imageNames.length)];

  var box1 = [same];
  for (var a = 0; a < imageNames.length; a++) {
    var randomBox1 = imageNames[Math.floor(Math.random() * imageNames.length)];
    var test = box1.find((e) => e === randomBox1);

    if (!test && box1.length < numfor) {
      box1.push(randomBox1);
      box1.sort(() => Math.random() - 0.5);
    }
  }

  const loadBox1 = () => {
    setListBox1(box1);
  };

  var box2 = [same];
  for (var b = 0; b < imageNames.length; b++) {
    var randomBox2 = imageNames[Math.floor(Math.random() * imageNames.length)];
    var test = box2.find((e) => e === randomBox2);
    var test1 = box1.find((e) => e === randomBox2);
    if (!test && !test1 && box2.length < numfor) {
      box2.push(randomBox2);
      box2.sort(() => Math.random() - 0.5);
    }
  }
  const loadBox2 = () => {
    setListBox2(box2);
  };

  return (
    <View style={{ flex: 1, marginTop: 0 }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      {setting ? (
        <Setting
          setSetting={setSetting}
          numfor={numfor}
          setNumfor={setNumfor}
          setSmall_large={setSmall_large}
          hardTimer={hardTimer}
          setHardTimer={setHardTimer}
          setTimer={setTimer}
          mute={mute}
          setMute={setMute}
          end={end}
          setValBtnStart={setValBtnStart}
          animatedTiming={animatedTiming}
          clearTimeoutAnimation={clearTimeoutAnimation}
          animation={animation}
        />
      ) : (
        <Boxes
          setSetting={setSetting}
          small_large={small_large}
          timer={timer}
          error_Point={error_Point}
          success_Point={success_Point}
          listBox2={listBox2}
          listBox1={listBox1}
          gifSuccess={gifSuccess}
          gifError={gifError}
          setIntervalval={setIntervalval}
          disable={disable}
          setDisable={setDisable}
          disablePause={disablePause}
          valBtnPause={valBtnPause}
          setValBtnPause={setValBtnPause}
          mute={mute}
          setMute={setMute}
          start={start}
          clear_Interval={clear_Interval}
          startInterval={startInterval}
          end={end}
          success={success}
          error={error}
          valBtnStart={valBtnStart}
          animatedTiming={animatedTiming}
          clearTimeoutAnimation={clearTimeoutAnimation}
          animation={animation}
          correctAnswer={correctAnswer}
          setCorrectAnswer={setCorrectAnswer}
        />
      )}
    </View>
  );
}

export default Home;
