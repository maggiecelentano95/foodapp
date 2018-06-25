import React from "react";
import styles from "./styles"
import { View, SectionList } from "react-native";
import PropTypes from 'prop-types';

import FoodItem from "./../FoodItem"
import SectionHeadingText from "./../SectionHeadingText"

//A presentation component that returns a SectionList of the pantry data
const FoodListView = ({sectionData, theme}) => {
    return (
      <View style= {theme ? styles.container : styles.container2}>
        <SectionList
          sections={sectionData}
          renderSectionHeader={_getSectionTextFunction(theme)}
          renderItem={_getRenderItemFunction(theme)} />
      </View>
  );
}

FoodListView.displayName = 'FoodListView';
FoodListView.propTypes = {
  sectionData: PropTypes.array.isRequired,
  theme: PropTypes.bool
};
FoodListView.defaultProps = {
  theme: true
}; 

//Helper functions...

//have some curry function to get the theme logic correct
const _getRenderItemFunction = (theme) => _renderItem(theme);
const _renderItem = (theme) => {
  return({item}) => {
    return (
      <FoodItem
        name={item.name}
        type={item.type}
        theme={theme}
      />
    );
  }
};

const _getSectionTextFunction = (theme) => _getSectionText(theme);
const _getSectionText = (theme) => {
    return ({section}) => {
        return (
            <SectionHeadingText section={section} theme={theme}></SectionHeadingText>
          );
    }
}

export default FoodListView;