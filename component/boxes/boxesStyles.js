import { StyleSheet } from "react-native";

const BoxesStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    flex: 0.2,
  },
  btns_start: {
    flex: 0.15,
  },
  boxs: {
    flex: 0.65,
  },
  box1: {
    width: "38%",
    height: "95%",
    position: "absolute",
    left: "4%",
    top: "2%",
  },
  box2: {
    width: "38%",
    height: "95%",
    position: "absolute",
    right: "4%",
    top: "2%",
  },
  view_images: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    borderColor: "#040078",
    borderWidth: 5,
    borderRadius: 10,
  },
  view_image: {
    justifyContent: "center",
    alignItems: "center",
  },
  view_image_16: {
    width: "25%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "70%",
    height: "70%",
  },
  view_gif: {
    width: "100%",
    height: "100%",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gif: {
    width: "50%",
    height: "100%",
    zIndex: 2,
  },
  ImageBackground: {
    width: "100%",
    height: "100%",
  },
});
export default BoxesStyles;
