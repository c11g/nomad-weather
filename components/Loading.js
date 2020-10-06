import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from 'react-native';

const Loading = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fdf6aa',
  },
  text: {
    fontSize: 30,
    color: "#222"
  }
});

Loading.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Loading;