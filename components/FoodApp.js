import React, {Component} from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "../reducers/index";
import { createBottomTabNavigator } from 'react-navigation';
import { YellowBox } from "react-native";

import PantryScreen from "./screens/PantryScreen";
import AddFoodScreen from "./screens/AddFoodScreen"
import SettingsScreen from "./screens/SettingsScreen"

//Let's ignore this annoying warning for now...
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated"
]);

let store = createStore(reducer);


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