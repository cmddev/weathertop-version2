"use strict";

const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
const stationAnalytics = require("../utils/station-analytics");
const uuid = require("uuid");

const station = {
  index(request, response) {
    const stationId = request.params.id;
    logger.debug("Station id = ", stationId);
    const station = stationStore.getStation(stationId);
    stationAnalytics.getLatestWeather(station);
    // const getLatestWeather = stationAnalytics.getLatestWeather(station);

      const viewData = {
        title: "Station",
        station: station,

      };
      response.render("station", viewData);
  },

  deleteReading(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingId;
    logger.debug(`Deleting Reading ${readingId} from Station ${stationId}`);
    stationStore.removeReading(stationId, readingId);
    response.redirect("/station/" + stationId);
  },

  addReading(request, response) {
    const stationID = request.params.id;
    const station = stationStore.getStation(stationID);
    const newReading = {
      id: uuid.v1(),
      code: request.body.code,
      temperature: request.body.temperature,
      windSpeed: request.body.windSpeed,
      windDirection: request.body.windDirection,
      pressure: request.body.pressure,
      date: new Date().toString(),
      // dateTime: new Date().toTimeString(),
    };
    logger.debug("New Reading = ", newReading);
    stationStore.addReading(stationID, newReading);
    response.redirect("/station/" + stationID);
  }
};

module.exports = station;
