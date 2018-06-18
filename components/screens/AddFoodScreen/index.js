import React, { Component } from 'react';
import { TextInput, View, Text, Button, Alert, Picker } from 'react-native';
import { addFood } from "./../../../actions/creators";
import { connect } from "react-redux";
import styles from "./styles"

class AddFoodScreen extends Component {
    constructor(props) {
      super(props);
      this.state = { name: "", type: "", expiration: ""  };
    }

    _addFood = () => {
        this.props.addFood(this.state.name, this.state.type, this.state.expiration);
        Alert.alert("Added " + this.state.name);
        this.setState({ name: "", type: "", expiration: "" })
    }; 

    render() {
        var haveAllData = this.state.name !== "" && this.state.type !== "" && this.state.expiration !== "";
        let button;

        if(haveAllData){
            button = <Button
                        color="#90ee90" 
                        title="Add Food" 
                        onPress={() => this._addFood()}
                    />;                   
        }
        else{
            button = <Button
                        color="#90ee90" 
                        title="Add Food" 
                        onPress={() => Alert.alert("Not all data added!")} 
                    />;
        }
        return (
            <View style={styles.dataEntryView}>
            <Text style={styles.textPrompts}>Enter Food Name</Text>
            <TextInput
                placeholder= "e.g. chicken"
                placeholderTextColor="lightgrey"
                underlineColorAndroid= {'transparent'}
                style={styles.textInput}
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
            />
            <Text style={styles.textPrompts}>Select Food Type</Text>
            <Picker
                style={styles.picker}
                mode="dropdown" //for Android
                selectedValue={this.state.type}
                onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
                <Picker.Item label="" value=""/>
                <Picker.Item label="Meat" value="meat"/>
                <Picker.Item label="Dairy" value="dairy"/>
                <Picker.Item label="Vegetable" value="vegetable"/>
                <Picker.Item label="Fruit" value="fruit"/>
                <Picker.Item label="Grain" value="grain"/>                 
            </Picker>
            <Text style={styles.textPrompts}>Enter Expiration Day</Text>
            <TextInput
                placeholder= "e.g. tuesday"
                placeholderTextColor="lightgrey"
                underlineColorAndroid= {'transparent'}
                style={styles.textInput}
                onChangeText={(expiration) => this.setState({expiration})}
                value={this.state.expiration}
            />
            {button}
        </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
      addFood: (name, type, expiration) => {
        dispatch(addFood(name, type, expiration));
      }
    };
  };

  //mapStateToProps is null...Do not need to get the state, just change it
  export default connect(null, mapDispatchToProps)(AddFoodScreen);