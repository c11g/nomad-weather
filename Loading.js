import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the weather...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#fdf6aa',
  },
  text: {
    marginTop: "auto",
    marginBottom: 100,
    fontSize: 30,
    color: "#222"
  }
});