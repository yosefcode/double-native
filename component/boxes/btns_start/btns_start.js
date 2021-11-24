import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import btns_startStyles from "./btns_startStyles";

function BtnsStart(props) {
  const {
    setIntervalval,
    start,
    clear_Interval,
    startInterval,
    end,
    disable,
    setDisable,
    disablePause,
    valBtnPause,
    setValBtnPause,
    valBtnStart,
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
        <Text style={btns_startStyles.text}>{valBtnStart}</Text>
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
      >
        <Text style={btns_startStyles.text}> {valBtnPause}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[btns_startStyles.btn, { opacity: disablePause ? 0.5 : 1 }]}
        onPress={() => end()}
        disabled={disablePause}
      >
        <Text style={btns_startStyles.text}>End Game</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BtnsStart;
