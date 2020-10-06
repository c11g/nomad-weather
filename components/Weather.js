import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// https://openweathermap.org/weather-conditions
const switchRender = (icon) => {
  switch(icon){
    case "01d":
    case "01n":
      return {
        icon: <Ionicons name="md-sunny" size={100} style={styles.icon} />,
        gradientColors: ['#6dd5fa', '#2980b9']
      }
    case "02d":
    case "02n":
      return {
        icon: <Ionicons name="md-cloudy" size={100} style={styles.icon} />,
        gradientColors: ['#2c3e50','#bdc3c7']
      }
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      return {
        icon: <Ionicons name="md-cloud" size={100} style={styles.icon} />,
        gradientColors: ['#e7e9bb', '#403b4a']
      }
    case "09d":
    case "09n":
    case "10d":
    case "10n":
      return {
        icon: <Ionicons name="md-rainy" size={100} style={styles.icon} /> ,
        gradientColors: ['#1d976c', '#93f9b9']
      }
    case "11d":
    case "11n":
      return {
        icon: <Ionicons name="md-thunderstorm" size={100} style={styles.icon} />,
        gradientColors: ['#4c669f', '#192f6a']
      }
    case "13d":
    case "13n":
      return {
        icon: <Ionicons name="md-snow" size={100} style={styles.icon} />,
        gradientColors: ['#fdc830', '#f37335']
      }
    case "50d":
    case "50n":
      return {
        icon: <Ionicons name="md-list" size={100} style={styles.icon} />,
        gradientColors: ['#a770ef', '#fdb99b']
      }
      break;
    default:
      return {
        icon: <Ionicons name="ios-help" size={100} style={styles.icon} />,
        gradientColors: ['#232526', '#414345']
      }
  }
}

const Weather = ({ tempObj }) => {
  const {main, name, weather: {description, icon}} = tempObj;

  return (
    <LinearGradient
        style={styles.gradient}
        colors={switchRender(icon).gradientColors}
      >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.section_icon}>
            {switchRender(icon).icon}
          </View>
          <View style={styles.section_text}>
            <Text style={styles.desc}>{description}</Text>
            <Text style={styles.temp}>{Math.round(main.temp)}℃</Text>
            <View style={styles.section_temp}>
              <Text style={styles.temp_small}>
                {Math.round(main.temp_max)}℃ / {Math.round(main.temp_min)}℃
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1
  },
  top: {
    marginTop: 40,
    marginRight: 20,
    alignItems: "flex-end"
  },
  name: {
    fontSize: 17,
    fontStyle: "italic",
    color: "#fff"
  },
  temp: {
    marginTop: 40,
    fontSize: 42,
    fontWeight: "700",
    color: "#fff"
  },
  temp_small: {
    flexDirection: "row",
    marginTop: 10,
    fontSize: 18,
    color: "#fff"
  },
  desc: {
    marginTop: 10,
    fontSize: 15,
    color: "#fff"
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section_icon: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  section_text: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    color: "#fff",
  }
});

Weather.propTypes = {
  tempObj: PropTypes.any.isRequired,
}

export default Weather;