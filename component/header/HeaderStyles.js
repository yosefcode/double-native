import { StyleSheet } from "react-native";

const HeaderStyles = StyleSheet.create({
  header: {
    height: "100% ",
    // backgroundColor: "grey",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  success_Point: {
    position: "absolute",
    top: "3.1vw",
    right: "1.6vw",
    color: "white",
    fontSize: "3vw",
    fontWeight: 700,
  },
  error_Point: {
    position: "absolute",
    top: "0.6vw",
    right: "1.6vw",
    color: "white",
    fontSize: "3vw",
    fontWeight: 700,
  },
  ImageBackground: {
    flex: 1,
    justifyContent: "center",
  },
});
export default HeaderStyles;
