import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    dataEntryView: {
      flexDirection: "column",
      backgroundColor: "#FFFFFF",
      borderBottomColor: "orange",
      borderBottomWidth: 2,
      padding: 5,
    },
    textInput : {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        marginBottom:30
    },
    picker : {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        marginBottom:30,
        width:"50%"
    },
    textPrompts:{
        fontSize:20,
        color:"grey",
        backgroundColor:"lightgreen",
        fontWeight:"bold"
    }
  });

  export default styles;