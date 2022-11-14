interface Data {
  clouds: cloudData;
  main: mainData;
  sys: sysData;
  name: string;
  weather: Array<weatherData>;
  wind: windData;
}

interface cloudData {
  all: number;
}

interface mainData {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface sysData {
  country: string;
  sunrise: number;
  sunset: number;
}

interface weatherData {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface windData {
  deg: number;
  speed: number;
}

export { Data };
