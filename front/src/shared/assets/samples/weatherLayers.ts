import type { WeatherLayer } from "../../misc";

interface WeatherLayerChoice {
  label: string;
  value: WeatherLayer;
  source: string;
}

export const weatherLayers: WeatherLayerChoice[] = [
  {
    label: "Температура",
    value: "temperatures",
    source:
      "https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=9765cb668f1f77aab684a571b1558698",
  },

  {
    label: "Накопление осадков",
    value: "precipitation",
    source:
      "https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=9765cb668f1f77aab684a571b1558698",
  },

  {
    label: "Скорость ветра",
    value: "wind",
    source:
      "https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=9765cb668f1f77aab684a571b1558698",
  },

  {
    label: "Облака",
    value: "clouds",
    source:
      "https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=9765cb668f1f77aab684a571b1558698",
  },

  {
    label: "Нет",
    value: "none",
    source: "none",
  },
];
