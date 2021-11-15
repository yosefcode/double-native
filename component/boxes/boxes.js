import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/dev";
import BoxesStyles from "./boxesStyles";
import Header from "../header/header";
import GifSuccess from "./Line Stickers & Themes.gif";
import GifError from "./thumbs-down-emoji-unscreen.gif";

function Boxes(props) {
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
  } = props;

  const imageNames = [
    require("../../img/1.png"),
    require("../../img/2.png"),
    require("../../img/3.png"),
    require("../../img/4.png"),
    require("../../img/5.png"),
    require("../../img/6.png"),
    require("../../img/7.png"),
    require("../../img/8.png"),
    require("../../img/9.png"),
    require("../../img/10.png"),
    require("../../img/11.png"),
    require("../../img/12.png"),
    require("../../img/13.png"),
    require("../../img/14.png"),
    require("../../img/15.png"),
    require("../../img/16.png"),
    require("../../img/17.png"),
    require("../../img/18.png"),
    require("../../img/19.png"),
    require("../../img/20.png"),
    require("../../img/21.png"),
    require("../../img/22.png"),
    require("../../img/23.png"),
    require("../../img/24.png"),
    require("../../img/25.png"),
    require("../../img/26.png"),
    require("../../img/27.png"),
    require("../../img/28.png"),
    require("../../img/29.png"),
    require("../../img/30.png"),
    require("../../img/31.png"),
    require("../../img/32.png"),
    require("../../img/33.png"),
    require("../../img/34.png"),
    require("../../img/35.png"),
    require("../../img/36.png"),
    require("../../img/37.png"),
    require("../../img/38.png"),
    require("../../img/39.png"),
    require("../../img/40.png"),
    require("../../img/41.png"),
    require("../../img/42.png"),
    require("../../img/43.png"),
    require("../../img/44.png"),
    require("../../img/45.png"),
    require("../../img/46.png"),
    require("../../img/47.png"),
    require("../../img/48.png"),
    require("../../img/49.png"),
    require("../../img/50.png"),
    require("../../img/52.png"),
    require("../../img/53.png"),
    require("../../img/54.png"),
    require("../../img/55.png"),
    require("../../img/56.png"),
    require("../../img/57.png"),
    require("../../img/58.png"),
    require("../../img/59.png"),
    require("../../img/60.png"),
  ];

  const [listBox1, setListBox1] = useState([]);
  const [listBox2, setListBox2] = useState([]);
  const [gifSuccess, setGifSuccess] = useState(false);
  const [intervalval, setIntervalval] = useState();
  const [gifError, setGifError] = useState(false);
  const [startError, setStartError] = useState(false);
  const [disable, setDisable] = useState(false);
  const [disablePause, setDisablePause] = useState(true);
  const [valBtnPause, setValBtnPause] = useState("עצור משחק");

  const startInterval = () => {
    var interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    setIntervalval(interval);
  };

  const clear_Interval = () => {
    clearInterval(intervalval);
  };

  // useEffect(() => {
  //   if (numfor > 5) {
  //     loadBox1();
  //     loadBox2();
  //   }
  // }, [numfor]);

  useEffect(() => {
    if (timer === -1) {
      error();
    }
  }, [timer, setTimer]);

  // const start = () => {
  //   if (numfor > 5 && timer > 0) {
  //     setDisable(false);
  //     clear_Interval();
  //     setSuccess_Point(0);
  //     setError_Point(0);
  //     loadBox1();
  //     loadBox2();
  //     setTimer(hardTimer);
  //     startInterval();
  //     setDisablePause(false);
  //   } else {
  //     setStartError(true);
  //     setTimeout(function () {
  //       setStartError(false);
  //     }, 3000);
  //   }
  // };
  // const end = () => {
  //   setDisablePause(true);
  //   setDisable(true);
  //   clear_Interval();
  //   setSuccess_Point(0);
  //   setError_Point(0);
  //   loadBox1();
  //   loadBox2();
  //   setTimer(hardTimer);
  // };

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

  const testBox1 = (imgClick) => {
    const foundBox2 = listBox2.find((images) => images === imgClick);
    foundBox2 ? success() : error();
  };

  const testBox2 = (imgClick) => {
    const foundBox1 = listBox1.find((images) => images === imgClick);
    foundBox1 ? success() : error();
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

  const start = () => {
    loadBox1();
    loadBox2();
  };
  let [fontsLoaded] = useFonts({
    Lobster_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={BoxesStyles.container}>
      <View style={BoxesStyles.name}>
        <Text
          style={{
            fontFamily: "Lobster_400Regular",
            color: "red",
            fontSize: "8vw",
          }}
        >
          d{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Lobster_400Regular",
            color: "yellow",
            fontSize: "8vw",
          }}
        >
          o{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Lobster_400Regular",
            color: "green",
            fontSize: "8vw",
          }}
        >
          u{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Lobster_400Regular",
            color: "red",
            fontSize: "8vw",
          }}
        >
          b{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Lobster_400Regular",
            color: "yellow",
            fontSize: "8vw",
          }}
        >
          l{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Lobster_400Regular",
            color: "green",
            fontSize: "8vw",
          }}
        >
          e
        </Text>
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
          <ImageBackground
            source={require("./old_map.png")}
            resizeMode="stretch"
            style={BoxesStyles.ImageBackground}
            imageStyle={{ borderRadius: "2vw" }}
          >
            {listBox1.map((imgClick, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    testBox1(imgClick);
                  }}
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
          </ImageBackground>
        </View>

        <View style={BoxesStyles.point}>
          <Header
            point={point}
            // audioError={audioError}
            // audioSuccess={audioSuccess}
            setpoint={setpoint}
            timer={timer}
            setTimer={setTimer}
            hardTimer={hardTimer}
            setHardTimer={setHardTimer}
            numfor={numfor}
            error_Point={error_Point}
            setError_Point={setError_Point}
            success_Point={success_Point}
            setSuccess_Point={setSuccess_Point}
          />
        </View>

        <View style={BoxesStyles.box2}>
          <ImageBackground
            source={require("./old_map.png")}
            resizeMode="stretch"
            style={BoxesStyles.ImageBackground}
            imageStyle={{ borderRadius: "2vw" }}
          >
            {listBox2.map((imgClick, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    testBox2(imgClick);
                  }}
                >
                  <Image
                    style={BoxesStyles.image}
                    key={imgClick}
                    source={imgClick}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              );
            })}{" "}
          </ImageBackground>
        </View>
        <TouchableOpacity
          onPress={() => {
            start();
          }}
        >
          <Text>Log in</Text>
        </TouchableOpacity>

        {/* <div className="div-btn-start">
        <button
          className="btn-start"
          onClick={() => {
            setIntervalval();
            setValBtnPause("עצור משחק");
            start();
          }}
        >
          משחק חדש
        </button>
        <button
          disabled={disablePause}
          className="btn-start"
          onClick={() => {
            if (disable === false) {
              clear_Interval();
              setDisable(true);
              setValBtnPause("המשך משחק");
            } else {
              setValBtnPause("עצור משחק");
              setDisable(false);
              startInterval();
            }
          }}
        >
          {valBtnPause}
        </button>
        <button disabled={disablePause} className="btn-start" onClick={end}>
          סיים משחק
        </button>
      </div> */}
      </View>
    </View>
  );
}

export default Boxes;
