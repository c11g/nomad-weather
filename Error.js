import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Error() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Permission to access location was denied</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fdf6aa',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 20,
    color: "#222"
  }
});