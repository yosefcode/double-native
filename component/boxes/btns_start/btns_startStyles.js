import { StyleSheet } from "react-native";

const btns_startStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  btn: {
    width: "20%",
    height: "60%",
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default btns_startStyles;
