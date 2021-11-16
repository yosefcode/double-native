import { StyleSheet } from "react-native";

const Point_TimerStyles = StyleSheet.create({
  header: {
    height: "100%",
    width: "10%",
    position: "absolute",
    // backgroundColor: "grey",
    right: "45%",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  like: {
    width: "100%",
    // backgroundColor: "grey",
    alignItems: "center",
  },
  success_Point: {
    position: "absolute",
    top: 20,
    // right: "1.6vw",
    color: "white",
    fontSize: 30,
    fontWeight: "700",
  },
  error_Point: {
    position: "absolute",
    top: 1,
    // right: "1.6vw",
    color: "white",
    fontSize: 30,
    fontWeight: "700",
  },
});
export default Point_TimerStyles;
