"use strict";

const stationStore = require("../models/station-store.js");
const logger = require("./logger");
const _ = require("lodash");
const stationDataConversions = require("../utils/station-dataconversions");


const stationAnalytics = {
  getLatestWeather(station) {
    let beaufort = null;
    let windCompass = null;
    let weatherConditionsText = null;
    let weatherIcon = null;
    let fahrenheit = null;
    let maxTemp = null;
    let minTemp = null;
    let maxPressure = null;
    let minPressure = null;
    if(station.readings.length > 0) {
      const latestReading = station.readings[station.readings.length - 1];
      beaufort = stationDataConversions.getBeaufort(latestReading.windSpeed);
      latestReading.beaufort = beaufort;
      weatherConditionsText = stationDataConversions.getWeatherConditionsText(latestReading.code);
    }

  },







getMinTemp(station) {
  let minTemp = null;
  if (station.readings.length > 0) {
    minTemp = station.readings[0].temperature;
    for (let i = 0; i < station.readings.length; i++) {
      if (station.readings[i].temperature < minTemp) {
        minTemp = station.readings[i].temperature;
      }
    }
    return minTemp;
  }
},

  getMaxTemp(station) {
    let maxTemp = null;
    if (station.readings.length > 0) {
      maxTemp = station.readings[0].temperature;
      for (let i = 0; i < station.readings.length; i++) {
        if (station.readings[i].temperature > maxTemp) {
          maxTemp = station.readings[i].temperature;
        }
      }
      return maxTemp;
    }
  },

  getMinPressure(station) {
    let minPressure = null;
    if (station.readings.length > 0) {
      minPressure = station.readings[0].pressure;
      for (let i = 0; i < station.pressure.length; i++) {
        if (station.readings[i].pressure < minPressure) {
          minPressure = station.readings[i].pressure;
        }
      }
      return minPressure;
    }
  },

  getMaxPressure(station) {
    let maxPressure = null;
    if (station.readings.length > 0) {
      maxPressure = station.readings[0].pressure;
      for (let i = 0; i < station.readings.length; i++) {
        if (station.readings[i].pressure > maxPressure) {
          maxPressure = station.readings[i].pressure;
        }
      }
      return maxPressure;
    }
  },

  getMinWindSpeed(station) {
    let minWindSpeed = null;
    if (station.readings.length > 0) {
      minWindSpeed = station.readings[0].windSpeed;
      for (let i = 0; i < station.pressure.length; i++) {
        if (station.readings[i].windSpeed < minWindSpeed) {
          minWindSpeed = station.readings[i].windSpeed;
        }
      }
      return minWindSpeed;
    }
  },

  getMaxWindSpeed(station) {
    let maxPressure = null;
    if (station.readings.length > 0) {
      maxPressure = station.readings[0].pressure;
      for (let i = 0; i < station.readings.length; i++) {
        if (station.readings[i].pressure > maxPressure) {
          maxPressure = station.readings[i].pressure;
        }
      }
      return maxPressure;
    }
  }
}
module.exports = stationAnalytics;


