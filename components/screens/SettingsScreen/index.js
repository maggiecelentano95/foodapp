import React, { Component } from 'react'
import {
   View,
   Switch,
   StyleSheet,
   Text
} 
from 'react-native'

import { changeTheme } from "./../../../actions/creators";
import { connect } from "react-redux";

class SettingsScreen extends Component {

  constructor(props) {
    super(props);
  }
  _switchChange = (isOn) => {
    this.props.changeTheme(isOn);
  }; 

  render(){
    return (
      <View style = {styles.container}>
      <Text>Orange Theme</Text>
         <Switch
            onValueChange = {this._switchChange}
            value = {this.props.isOn}/>
      </View>
   )
  }
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 100
   }
})

//Get store data and pass as props into PantryScreen
const mapStateToProps = state => {
  return {
    isOn: state.settings.theme,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeTheme: (isOn) => {
      dispatch(changeTheme(isOn));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
