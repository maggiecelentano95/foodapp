import React, { Component } from "react";
import { View, Text, SectionList } from "react-native";
import { connect } from "react-redux";
import { addFood, deleteFood } from "./../../../actions/creators";
import FoodItem from "./../../FoodItem";
import styles from "./styles";

class PantryScreen extends Component {

  constructor(props) {
    super(props);
  }

  _renderItem = ({ item }) => {
    return (
      <FoodItem
        name={item.name}
        type={item.type}
      />
    );
  };

  _renderHeader = ({ section }) => {
    return (
      <Text style={styles.headingText}>
        {section.title}
      </Text>
    );
  };

  _addKeysToFood = food => {
    return food.map(f => {
      return Object.assign(f, { key: f.id });
    });
  };

  _getSectionList = () => {
    let pantryData = this._addKeysToFood(this.props.pantryData);
    //Handle no data better later
    if (!pantryData) {
      pantryData = this._addKeysToFood([{name:"taco",type:"meat",expiration:"Monday"}])
    }
    return [
      {
        title:"Monday",
        data: pantryData.filter(food => food.expiration == "Monday")
      },
      {
        title:"Tuesday",
        data: pantryData.filter(food => food.expiration == "Tuesday")
      },
      {
        title:"Wednesday",
        data: pantryData.filter(food => food.expiration == "Wednesday")
      },
      {
        title:"Thursday",
        data: pantryData.filter(food => food.expiration == "Thursday")
      },
      {
        title:"Friday",
        data: pantryData.filter(food => food.expiration == "Friday")
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this._getSectionList()}
          renderSectionHeader={this._renderHeader} 
          renderItem={this._renderItem} />
      </View>
    );
  }
}


//Get store data and pass as props into PantryScreen
const mapStateToProps = state => {
  return {
    pantryData: state.pantry,
  };
};

export default connect(mapStateToProps)(PantryScreen);