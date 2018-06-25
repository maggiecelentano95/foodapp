import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    foodItem: {
      flexDirection: "row",
      backgroundColor: "#FFFFFF",
      borderBottomWidth: 2,
      borderBottomColor:"orange",
      padding: 5,
      height: 70
    },
    foodItem2: {
      flexDirection: "row",
      backgroundColor: "#FFFFFF",
      borderBottomWidth: 2,
      borderBottomColor:"black",
      padding: 5,
      height: 70
    },
    foodInfo: {
      flex: 2,
      alignItems: "flex-start",
      flexDirection: "column",
      alignSelf: "center",
      padding: 20,
      width:200
    },
    deleteView: {
      flex: 0,
      alignItems: "flex-end",
      flexDirection: "column",
      alignSelf: "flex-end",
      padding: 20,
    },
    foodText: {
      fontWeight: "bold",
      fontSize: 20,
    },
    deleteText: {
      fontWeight: "bold",
      fontSize: 10,
      color:"red"
    },
    foodImage: {
      height: 60,
      width:'20%'
    }
  });

  export default styles;