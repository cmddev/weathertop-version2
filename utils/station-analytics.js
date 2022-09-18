"use strict";

const stationStore = require("../models/station-store.js");
const logger = require("./logger");
const _ = require("lodash");
const stationDataConversions = require("../utils/station-dataconversions");
const { template } = require("lodash");

const stationAnalytics = {
  getLatestWeather(station) {

    if(station.readings.length > 0) {
      const latestReading = station.readings[station.readings.length - 1];
      station.latestReading = latestReading;

      station.fahrenheit = stationDataConversions.getFahrenheit(latestReading.temperature);
      station.celsius = stationDataConversions.getCelsius(latestReading.temperature);
      station.latestPressure = stationDataConversions.getPressure(latestReading.pressure);
      // station.minTemp = stationAnalytics.getMinTemp(station.readings);
      // station.maxTemp = stationAnalytics.getMaxTemp(station.readings);

      // station.minPressure = stationAnalytics.getMinPressure(station.readings);
      // station.maxPressure = stationAnalytics.getMaxPressure(station.readings);

      station.beaufort = stationDataConversions.getBeaufort(latestReading.windSpeed);
      // station.minWindSpeed = stationAnalytics.getMinWindSpeed(station.readings);
      // station.maxWindSpeed = stationAnalytics.getMaxWindSpeed(station.readings);

      station.windCompass = stationDataConversions.getWindCompass(latestReading.windDirection);
      station.weatherConditionsText = stationDataConversions.getWeatherConditionsText(latestReading.code);
      station.weatherIcon = stationDataConversions.getWeatherIcon(latestReading.code);


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


