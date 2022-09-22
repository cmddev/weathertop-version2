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
      station.minTemp = stationDataConversions.getMinTempAtStation(station);
      station.maxTemp = stationDataConversions.getMaxTempAtStation(station);

      station.latestPressure = stationDataConversions.getPressure(latestReading.pressure);
      // station.minPressure = stationDataConversions.getMinPressureAtStation(station);
      // station.maxPressure = stationDataConversions.getMaxPressureAtStation(station);

      station.beaufort = stationDataConversions.getBeaufort(latestReading.windSpeed);
      // station.minWindSpeed = stationDataConversions.getMinWindSpeedAtStation(station);
      // station.maxWindSpeed = stationDataConversions.getMaxWindSpeedAtStation(station);

      station.windCompass = stationDataConversions.getWindCompass(latestReading.windDirection);
      station.weatherConditionsText = stationDataConversions.getWeatherConditionsText(latestReading.code);
      station.weatherIcon = stationDataConversions.getWeatherIcon(latestReading.code);


    }
  },


}
module.exports = stationAnalytics;


