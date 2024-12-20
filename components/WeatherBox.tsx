import Image from "next/image";

const DataCard = ({
  value,
  description,
  unit,
}: {
  value: number | string;
  description: string;
  unit?: string;
}) => (
  <div className="h-full flex flex-col items-center justify-center bg-white bg-opacity-10 rounded-xl p-4">
    <h2 className="text-white text-5xl">
      {value} {unit}
    </h2>
    <p className="text-slate-300">{description}</p>
  </div>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WeatherBox = ({ currentWeather }: { currentWeather: any }) => {
  const currentDate = new Date().toDateString();
  const currentTime = new Date().toLocaleTimeString();

  const aqiBand = (aqi: number) => {
    let band;
    if (aqi > 0 && aqi <= 35) {
      band = "Low";
    } else if (aqi <= 53) {
      band = "Moderate";
    } else if (aqi <= 70) {
      band = "High";
    } else if (aqi > 70) {
      band = "Very High";
    }
    return band;
  };

  const uvIndex = (uv: number) => {
    let text;
    if (uv > 0 && uv <= 2) {
      text = "Low";
    } else if (uv <= 5) {
      text = "Medium";
    } else if (uv <= 7) {
      text = "High";
    } else if (uv <= 10) {
      text = "Very High";
    } else if (uv > 10) {
      text = "Extremely High";
    }
    return text;
  };

  return (
    <div className="flex flex-col justify-start rounded-lg px-10 pt-8">
      <div className="flex flex-col text-white">
        <h2 className="font-semibold text-4xl">
          {currentWeather.location.region}, {currentWeather.location.country}
        </h2>
        <p className="mt-2">
          {currentDate} {currentTime}
        </p>
        <p className="">
          Last updated :{" "}
          {new Date(currentWeather.current.last_updated).toLocaleTimeString()}
        </p>
      </div>

      <div className="h-80 flex flex-col md:flex-row md:divide-x-[1px] divide-slate-400 text-white gap-8 my-8 md:my-0">
        <div className="w-full flex flex-1 justify-center items-center gap-12">
          <Image
            src={`https:${currentWeather.current.condition.icon}`}
            alt="weather icon"
            width={96}
            height={96}
            className="size-24 bg-slate-800 rounded-3xl hidden md:block"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-7xl font-bold">
              {currentWeather.current.temp_c}{" "}
              <span className="text-5xl">°C</span>
            </h1>
            <p className=" text-xl text-slate-300">
              Feels like {currentWeather.current.feelslike_c} °C
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center items-center">
          <div className="relative flex flex-col gap-2">
            <p className="absolute text-xl -top-8 left-6">
              {aqiBand(currentWeather.current.air_quality.pm2_5.toFixed(0))}
            </p>
            <h1 className="text-7xl font-bold flex flex-col">
              {currentWeather.current.air_quality.pm2_5.toFixed(0)}
            </h1>
            <p className="text-xl text-slate-300">AQI PM 2.5</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-wrap flex-col md:flex-row w-full h-fit gap-4 my-8 max-w-7xl">
          <DataCard
            value={currentWeather.current.windchill_c}
            description="Windchill"
            unit="°C"
          />
          <DataCard
            value={currentWeather.current.heatindex_c}
            description="Heat index"
          />
          <DataCard
            value={currentWeather.current.dewpoint_c}
            description="Dew point"
            unit="°C"
          />
          <DataCard
            value={currentWeather.current.cloud}
            description="Cloud cover"
            unit="%"
          />
          <DataCard
            value={currentWeather.current.humidity}
            description="Humidity"
            unit="%"
          />
          <DataCard
            value={uvIndex(currentWeather.current.uv)!}
            description="UV Index"
          />
          <DataCard
            value={currentWeather.current.gust_kph}
            description="Wind gust"
            unit="km/h"
          />
          <DataCard
            value={currentWeather.current.wind_kph}
            description="Wind speed"
            unit="km/h"
          />
          <DataCard
            value={currentWeather.current.pressure_mb}
            description="Pressure"
            unit="clas"
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherBox;
