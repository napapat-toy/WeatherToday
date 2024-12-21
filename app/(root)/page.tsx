import WeatherBox from "@/components/WeatherBox";
import { getCurrentWeather } from "@/lib/weather.actions";

// https://www.weatherapi.com/docs/

const Home = async () => {
  const currentWeather = await getCurrentWeather();

  return (
    <>
      <div className="h-full w-full overflow-auto">
        {currentWeather ? (
          <WeatherBox currentWeather={currentWeather} />
        ) : (
          <p className="text-xl">Loading...</p>
        )}
      </div>
    </>
  );
};

export default Home;
