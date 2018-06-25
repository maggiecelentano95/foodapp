import React, { Component } from "react";
import { connect } from "react-redux";

import FoodListView from "./../../FoodListView"

//This is a "container" component that only worries about redux state and
//data logic.
class PantryScreen extends Component {

  constructor(props) {
    super(props);
  }

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
      <FoodListView 
        sectionData = {this._getSectionList()} theme = {this.props.theme}>
      </FoodListView>
    );
  }
}


//Get store data and pass as props into PantryScreen
const mapStateToProps = state => {
  console.log(state.pantry)
  return {
    pantryData: state.pantry,
    theme: state.settings.theme
  };
};

export default connect(mapStateToProps)(PantryScreen);