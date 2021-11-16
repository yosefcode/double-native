import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Boxes from "./boxes/boxes";
import Setting from "./setting/setting";

function Home() {
  const [setting, setSetting] = useState(true);
  const [numfor, setNumfor] = useState(9);
  const [small_large, setSmall_large] = useState("boxsmall");
  // const [audioSuccess] = useState(new Audio("sound/success.mp3"));
  // const [audioError] = useState(new Audio("sound/error.mp3"));
  const [hardTimer, setHardTimer] = useState(10);
  const [timer, setTimer] = useState(0);
  const [success_Point, setSuccess_Point] = useState(0);
  const [error_Point, setError_Point] = useState(0);
  const [listBox1, setListBox1] = useState([]);
  const [listBox2, setListBox2] = useState([]);
  const [gifSuccess, setGifSuccess] = useState(false);
  const [intervalval, setIntervalval] = useState();
  const [gifError, setGifError] = useState(false);
  const [startError, setStartError] = useState(false);
  const [disable, setDisable] = useState(false);
  const [disablePause, setDisablePause] = useState(true);
  const [valBtnPause, setValBtnPause] = useState("Pause");

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
      error();
    }
  }, [timer, setTimer]);

  const start = () => {
    if (numfor > 5 && timer > 0) {
      setDisable(false);
      clear_Interval();
      setSuccess_Point(0);
      setError_Point(0);
      loadBox1();
      loadBox2();
      setTimer(hardTimer);
      startInterval();
      setDisablePause(false);
    } else {
      setStartError(true);
      setTimeout(function () {
        setStartError(false);
      }, 3000);
    }
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
    loadBox1();
    loadBox2();
    setTimer(hardTimer);
    clear_Interval();
    setGifSuccess(true);
    setTimeout(function () {
      setGifSuccess(false);
      startInterval();
    }, 2000);
    // audioSuccess.play();
  };

  const error = () => {
    setTimer(hardTimer);
    setError_Point(error_Point + 1);
    loadBox1();
    loadBox2();
    clear_Interval();
    setGifError(true);
    setTimeout(function () {
      setGifError(false);
      startInterval();
    }, 2000);
    // audioError.play();
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

  // const createThreeButtonAlert = () =>
  //   Alert.alert("Alert Title", "My Alert Msg", [
  //     {
  //       text: "Ask me later",
  //       onPress: () => console.log("Ask me later pressed"),
  //     },
  //     {
  //       text: "Cancel",
  //       onPress: () => console.log("Cancel Pressed"),
  //       style: "cancel",
  //     },
  //     { text: "OK", onPress: () => console.log("OK Pressed") },
  //   ]);

  return (
    <View style={{ flex: 1 }}>
      {setting ? (
        <Setting
          setting={setting}
          setSetting={setSetting}
          numfor={numfor}
          setNumfor={setNumfor}
          small_large={small_large}
          setSmall_large={setSmall_large}
          hardTimer={hardTimer}
          setHardTimer={setHardTimer}
          timer={timer}
          setTimer={setTimer}
          error_Point={error_Point}
          setError_Point={setError_Point}
          success_Point={success_Point}
          setSuccess_Point={setSuccess_Point}
          listBox2={listBox2}
          setListBox2={setListBox2}
          listBox1={listBox1}
          setListBox1={setListBox1}
          gifSuccess={gifSuccess}
          setGifSuccess={setGifSuccess}
          gifError={gifError}
          setGifError={setGifError}
          intervalval={intervalval}
          setIntervalval={setIntervalval}
          startError={startError}
          setStartError={setStartError}
          disable={disable}
          setDisable={setDisable}
          disablePause={disablePause}
          setDisablePause={setDisablePause}
          valBtnPause={valBtnPause}
          setValBtnPause={setValBtnPause}
          // audioError={audioError}
          // audioSuccess={audioSuccess}
          start={start}
          end={end}
          success={success}
          error={error}
          clear_Interval={clear_Interval}
          startInterval={startInterval}
        />
      ) : (
        <Boxes
          setting={setting}
          setSetting={setSetting}
          numfor={numfor}
          setNumfor={setNumfor}
          small_large={small_large}
          setSmall_large={setSmall_large}
          hardTimer={hardTimer}
          setHardTimer={setHardTimer}
          timer={timer}
          setTimer={setTimer}
          error_Point={error_Point}
          setError_Point={setError_Point}
          success_Point={success_Point}
          setSuccess_Point={setSuccess_Point}
          listBox2={listBox2}
          setListBox2={setListBox2}
          listBox1={listBox1}
          setListBox1={setListBox1}
          gifSuccess={gifSuccess}
          setGifSuccess={setGifSuccess}
          gifError={gifError}
          setGifError={setGifError}
          intervalval={intervalval}
          setIntervalval={setIntervalval}
          startError={startError}
          setStartError={setStartError}
          disable={disable}
          setDisable={setDisable}
          disablePause={disablePause}
          setDisablePause={setDisablePause}
          valBtnPause={valBtnPause}
          setValBtnPause={setValBtnPause}
          // audioError={audioError}
          // audioSuccess={audioSuccess}
          start={start}
          end={end}
          success={success}
          error={error}
          clear_Interval={clear_Interval}
          startInterval={startInterval}
        />
      )}
    </View>
  );
}

export default Home;