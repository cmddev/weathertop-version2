"use strict";

const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
// const stationAnalytics = require("../utils/station-analytics");
const uuid = require("uuid");

const station = {
  index(request, response) {
    const stationId = request.params.id;
    logger.debug("Station id = ", stationId);
    const station = stationStore.getStation(stationId);
    const viewData = {
      title: "Station",
      station: station,
      // stationSummary : {
      //   //shortestSong : stationAnalytics.getShortestSong(station),
      //   // duration : stationAnalytics.getStationDuration(station)
      // }
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
      title: request.body.title,
      artist: request.body.artist,
      duration: Number(request.body.duration)
    };
    logger.debug("New Reading = ", newReading);
    stationStore.addReading(stationID, newReading);
    response.redirect("/station/" + stationID);
  }
};

module.exports = station;
