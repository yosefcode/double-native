import { StyleSheet } from "react-native";

const BoxesStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    flex: 0.2,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  boxs: {
    flex: 0.7,
  },
  box1: {
    width: "40%",
    height: "100%",
    position: "absolute",
    left: "4vw",
  },
  box2: {
    width: "40%",
    height: "100%",
    position: "absolute",
    right: "4vw",
  },
  image: {
    width: "10vw",
    height: "10vw",
  },
  view_gif: {
    width: "100%",
    height: "100%",
    // flex: 0.7,
    // backgroundColor: "black",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gif: {
    width: "50%",
    height: "100%",
  },
  ImageBackground: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: "2vw",
    border: "2px solid black",
  },
  point: {
    width: "10%",
    height: "100%",
    position: "absolute",
    left: "45%",
  },
});
export default BoxesStyles;
