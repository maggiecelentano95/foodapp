import React from "react";
import styles from "./styles"
import { Text } from "react-native";
import PropTypes from 'prop-types';

const SectionHeadingText = ({theme, section}) => {
    return (
        <Text style={theme ? styles.headingText : styles.headingText2}>
            {section.title}
        </Text>
      );
}

SectionHeadingText.displayName = 'SectionHeadingText';
SectionHeadingText.propTypes = {
    section: PropTypes.object,
    theme: PropTypes.bool
};
SectionHeadingText.defaultProps = {
    theme: true
}; 

export default SectionHeadingText;