"use strict";

//getBeaufort
//getWindCompass
//getWeatherConditionsText
//getWeatherIcon
//getFahrenheit

const stationDataConversions = {

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
    } else if (windSpeed >= 118) {
      return 12;
    } else {
      return -1;
    }
  },


  getWindCompass(windDirection) {
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

  getWeatherConditionsText(code) {
    switch (code) {
      case "100":
        return "Clear and Sunny";
      case "200":
        return "Partial Clouds";
      case "300":
        return "Cloudy";
      case "400":
        return "Light Showers";
      case "500":
        return "Heavy Showers";
      case "600":
        return "Rain";
      case "700":
        return "Snow";
      case "800":
        return "Thunder/Struck";
      // default:
      //   return "Unknown Conditions";
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

  getFahrenheit(temperature) {
    return temperature * 9 / 5 + 32;
  },

  getCelsius(temperature) {
    return temperature;
  },

  getPressure(pressure) {
    return pressure;
  },

  getMaxTempAtStation(station) {
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

  getMinTempAtStation(station) {
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

  getMinPressureAtStation(station) {
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

  getMaxPressureAtStation(station) {
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
  //
  // getMinWindSpeedAtStation(station) {
  //   let minWindSpeed = null;
  //   if (station.readings.length > 0) {
  //     minWindSpeed = station.readings[0].windSpeed;
  //     for (let i = 0; i < station.pressure.length; i++) {
  //       if (station.readings[i].windSpeed < minWindSpeed) {
  //         minWindSpeed = station.readings[i].windSpeed;
  //       }
  //     }
  //     return minWindSpeed;
  //   }
  // },
  //
  // getMaxWindSpeedAtStation(station) {
  //   let maxWindSpeed = null;
  //   if (station.readings.length > 0) {
  //     maxWindSpeed = station.readings[0].pressure;
  //     for (let i = 0; i < station.readings.length; i++) {
  //       if (station.readings[i].pressure > maxWindSpeed) {
  //         maxWindSpeed = station.readings[i].pressure;
  //       }
  //     }
  //     return maxPressure;
  //   }
  // }


}

module.exports = stationDataConversions;