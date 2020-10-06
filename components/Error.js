import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from 'react-native';

const Error = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#af717b',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: "600",
    color: "#fff"
  }
});

Error.propTypes = {
  message: PropTypes.string.isRequired
};

export default Error;