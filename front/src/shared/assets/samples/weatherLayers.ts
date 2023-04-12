import { WeatherLayers } from "../../misc";

interface WeatherLayerChoice {
  label: string;
  value: WeatherLayers;
  source: string;
}

export const weatherLayers: WeatherLayerChoice[] = [
  {
    label: "Температура",
    value: WeatherLayers.temperatures,
    source:
      "https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=9765cb668f1f77aab684a571b1558698",
  },

  {
    label: "Накопление осадков",
    value: WeatherLayers.precipitation,
    source:
      "https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=9765cb668f1f77aab684a571b1558698",
  },

  {
    label: "Скорость ветра",
    value: WeatherLayers.wind,
    source:
      "https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=9765cb668f1f77aab684a571b1558698",
  },

  {
    label: "Облака",
    value: WeatherLayers.clouds,
    source:
      "https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=9765cb668f1f77aab684a571b1558698",
  },

  {
    label: "Нет",
    value: WeatherLayers.none,
    source: "none",
  },
];
