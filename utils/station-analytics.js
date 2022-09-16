"use strict";

const stationStore = require("../models/station-store.js");
const logger = require("./logger");
const _ = require("lodash");

const stationAnalytics = {

  getLatestReading(readings) {
    return readings[readings.length - 1]
  },


  getFahrenheit(temperature) {
  return temperature * 9/5 + 32;
  },

  getCelsius(temperature) {

  },

  getWeatherConditions(code) {
    let weatherIcon = code;
    switch (code) {
      case 100:
        return "Clear and Sunny";
      case 200:
        return "Partial Clouds";
      case 300:
        return "Cloudy";
      case 400:
        return "Light Showers";
      case 500:
        return "Heavy Showers";
      case 600:
        return "Rain";
      case 700:
        return "Snow";
      case 800:
        return "Thunder/Struck";
      default:
        return "Unknown Conditions";
    }
  },

  getWeatherIcon(code) {
    const mapCode = new Map();
    mapCode.set("100", "sun outline icon");
    mapCode.set("200", "cloud sun icon");
    mapCode.set("300", "cloud icon");
    mapCode.set("400", "cloud sun rain icon");
    mapCode.set("500", "cloud showers heavy icon");
    mapCode.set("600", "cloud rain icon");
    mapCode.set("700", "snowflake icon");
    mapCode.set("800", "bolt icon");
    mapCode.set("900", "meteor icon");

    const icon = mapCode.get(code);
    return icon;
  },

    getBeaufort(windSpeed) {
  if (windSpeed <= 1) {
    return 0;
    //  beaufortLabel = "Calm";
  } else if (windSpeed > 1 && windSpeed <= 5) {
    return 1;
  } else if (windSpeed > 6 && windSpeed <= 11) {
    return 2;
  } else if (windSpeed > 12 && windSpeed <= 19) {
    return 3;
  } else if (windSpeed > 20 && windSpeed <= 28) {
    return 4;
  } else if (windSpeed > 29 && windSpeed <= 38) {
    return 5;
  } else if (windSpeed > 39 && windSpeed <= 49) {
    return 6;
  } else if (windSpeed > 50 && windSpeed <= 61) {
    return 7;
  } else if (windSpeed > 62 && windSpeed <= 74) {
    return 8;
  } else if (windSpeed > 75 && windSpeed <= 88) {
    return 9;
  } else if (windSpeed > 89 && windSpeed <= 102) {
    return 10;
  } else if (windSpeed > 103 && windSpeed <= 117) {
    return 11;
  } else {
    return 0;
  }
},

  getWindDirection(windDirection) {
    if ((windDirection <= 360 && windDirection >= 348.75) || (windDirection < 11.25 && windDirection >= 0)) {
      return "North";
    } else if (windDirection >= 11.25 && windDirection < 33.75) {
      return "NNE";
    } else if (windDirection >= 33.75 && windDirection < 56.25) {
      return "NE";
    } else if (windDirection >= 56.25 && windDirection < 78.75) {
      return "ENE";
    } else if (windDirection >= 78.75 && windDirection < 101.25) {
      return "East";
    } else if (windDirection >= 101.25 && windDirection < 123.75) {
      return "ESE";
    } else if (windDirection >= 123.75 && windDirection < 146.25) {
      return "SE";
    } else if (windDirection >= 146.25 && windDirection < 168.75) {
      return "SSE";
    } else if (windDirection >= 168.75 && windDirection < 191.25) {
      return "South";
    } else if (windDirection >= 191.25 && windDirection < 213.75) {
      return "SSW";
    } else if (windDirection >= 213.75 && windDirection < 236.25) {
      return "SW";
    } else if (windDirection >= 236.25 && windDirection < 258.75) {
      return "WSW";
    } else if (windDirection >= 258.75 && windDirection < 281.25) {
      return "West";
    } else if (windDirection >= 281.25 && windDirection < 303.75) {
      return "WNW";
    } else if (windDirection >= 303.75 && windDirection < 326.25) {
      return "NW";
    } else if (windDirection >= 326.25 && windDirection < 348.75) {
      return "NNW";
    } else {
      return "Unknown";
    }
  },

getMinTemp(station) {
  if (station.length > 0) {
    minValue = stations[0].temperature;
    for (let i = 0; i < station.length; i++) {
      if (stato[i].temperature < minValue) {
        minValue = readings[i].temperature;
      }
    }
  }
  return minValue;
},

  getMaxTemp(readings) {
    let maxValue = 0;
    if (readings.length > 0) {
      maxValue = readings[0].temperature;
      for (let i = 0; i < readings.length; i++) {
        if (readings[i].temperature > maxValue) {
          maxValue = readings[i].temperature;
        }
      }
    }
    return maxValue;
  },


getMinPressure: function(readings) {
  let minValue = 0;
  if (readings.length > 0) {
    minValue = readings[0].pressure;
    for (let i = 0; i < readings.length; i++) {
      if (readings[i].pressure < minValue) {
        minValue = readings[i].pressure;
      }
    }
  }
  return minValue;
},

getMaxPressure: function(readings) {
  let maxValue = 0;
  if (readings.length > 0) {
    maxValue = readings[0].pressure;
    for (let i = 0; i < readings.length; i++) {
      if (readings[i].pressure > maxValue) {
        maxValue = readings[i].pressure;
      }
    }
  }
  return maxValue;
},

getMinWindSpeed: function(readings) {
  let minValue = 0;
  if (readings.length > 0) {
    minValue = readings[0].windSpeed;
    for (let i = 0; i < readings.length; i++) {
      if (readings[i].windSpeed < minValue) {
        minValue = readings[i].windSpeed;
      }
    }
  }
  return minValue;
},

  getMaxWindSpeed: function(readings) {
    let maxValue = 0;
    if (readings.length > 0) {
      maxValue = readings[0].windSpeed;
      for (let i = 0; i < readings.length; i++) {
        if (readings[i].windSpeed > maxValue) {
          maxValue = readings[i].windSpeed;
        }
      }
    }
    return maxValue;
  },
}
module.exports = stationAnalytics;


