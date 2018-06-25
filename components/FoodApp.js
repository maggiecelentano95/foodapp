import React, {Component} from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { pantry, food, settings } from "../reducers/index";
import { createBottomTabNavigator } from 'react-navigation';
import { YellowBox } from "react-native";

import PantryScreen from "./screens/PantryScreen";
import AddFoodScreen from "./screens/AddFoodScreen"
import SettingsScreen from "./screens/SettingsScreen"
import PantryRepo from "../data/repo/PantryRepo"
//Let's ignore this annoying warning for now...
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated"
]);

const initialState = () => {
  return { pantry: PantryRepo.getPantry("maggie"), settings:{theme:true}};
};

const store = createStore(
    combineReducers({ pantry, food, settings }), 
    initialState()
)


class FoodApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

var Navigator= createBottomTabNavigator({
    Pantry: PantryScreen,
    AddFood: AddFoodScreen,
    Settings: SettingsScreen
  },
  {
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'white',
      labelStyle: {
        fontSize: 20,
      },
      style: {
        backgroundColor: 'grey',
      },
    },
  }
);

export default FoodApp;