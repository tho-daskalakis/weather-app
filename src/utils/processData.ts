import { Data } from './dataInterface';

function processData(rawData: Data): Data {
  console.log(rawData);

  const data: Data = {
    clouds: rawData.clouds,
    main: rawData.main,
    name: rawData.name,
    weather: rawData.weather,
    wind: rawData.wind,
  };

  console.log(data);

  return data;
}

export { processData };
