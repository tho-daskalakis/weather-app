import { Data } from './dataInterface';

function processData(rawData: Data): Data {
  const data: Data = {
    clouds: rawData.clouds,
    main: rawData.main,
    name: rawData.name,
    sys: rawData.sys,
    weather: rawData.weather,
    wind: rawData.wind,
  };
  console.log(data);

  return data;
}

export { processData };
