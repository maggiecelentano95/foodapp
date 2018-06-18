import React from "react";
import styles from "./styles"
import { Text, View, Image, TouchableHighlight, Alert } from "react-native";

const FoodItem = 
    (props) => {
        var icon;
        //react-native does not handle dynamic images well...
        if(props.type == 'fruit')
            icon = require('./../../images/fruit.jpeg')
        else if(props.type == "vegetable")
            icon = require('./../../images/vegetable.jpeg')
        else if(props.type == "meat")
            icon = require('./../../images/meat.jpeg')
        else if(props.type == "grain")
            icon = require('./../../images/grain.jpeg') 
        else if(props.type == "dairy")
            icon = require('./../../images/dairy.jpeg')
        else
            icon = require('./../../images/vegetable.jpeg')

         
        return <View style={styles.foodItem}>
                <Image style={styles.foodImage} source={icon}/>
                <TouchableHighlight underlayColor="grey" onPress={() => OnPressButton(props.name)}>
                <View style={styles.foodInfo}>
                    <Text style={styles.foodText}>{props.name}</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="red" onPress={() => OnDelete(props.name)}>
                <View style={styles.deleteView}>             
                    <Text style={styles.deleteText}>Delete</Text>
                </View>
                </TouchableHighlight>
            </View>;

    }

function OnPressButton(foodName) {
    Alert.alert(foodName)
  }
function OnDelete(foodName){
    Alert.alert("Delete" + foodName)
}
export default FoodItem;