import WeatherBox from "@/components/WeatherBox";
import { getCurrentWeather } from "@/lib/weather.actions";

// https://www.weatherapi.com/docs/

const Home = async () => {
  const currentWeather = await getCurrentWeather();

  return (
    <>
      <div className="h-full w-full overflow-auto">
        {currentWeather && <WeatherBox currentWeather={currentWeather} />}
      </div>
    </>
  );
};

export default Home;
