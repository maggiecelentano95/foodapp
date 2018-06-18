import React, { Component } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

class Header extends Component {
  static displayName = "Header";

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{this.props.headingText}</Text>
      </View>
    );
  }
}

export default Header;