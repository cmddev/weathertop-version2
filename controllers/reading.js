"use strict";

const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
const stationAnalytics = require("../utils/station-analytics");

const reading = {
  index(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingId;
    logger.debug(`Editing Reading ${readingId} from Station ${stationId}`);
    const viewData = {
      title: "Edit Reading",
      station: stationStore.getStation(stationId),
      reading: stationStore.getReading(stationId, readingId)
    };
    response.render("reading", viewData);
  },

  // update(request, response) {
  //   const stationId = request.params.id;
  //   const readingId = request.params.readingId;
  //   const reading = stationStore.getReading(stationId, readingId)
  //   const newReading = {
  //     code: request.body.code,
  //     temperature: request.body.temperature,
  //     windSpeed: request.body.windSpeed,
  //     windDirection: request.body.windDirection,
  //     pressure: request.body.pressure,
  //     date: new Date().toString(),
  //   };
  //   logger.debug(`Updating Reading ${readingId} from Station ${stationId}`);
  //   stationStore.updateReading(reading, newReading);
  //   response.redirect("/station/" + stationId);
  // },
};

module.exports = reading;
