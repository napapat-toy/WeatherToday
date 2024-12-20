import WeatherBox from "@/components/WeatherBox";
import { getCurrentWeather } from "@/lib/weather.actions";
import { Suspense } from "react";

// https://www.weatherapi.com/docs/

const Home = async () => {
  const currentWeather = await getCurrentWeather();

  return (
    <>
      <div className="h-full w-full overflow-auto">
        <Suspense fallback={<p>Loading...</p>}>
          {currentWeather && <WeatherBox currentWeather={currentWeather} />}
        </Suspense>
      </div>
    </>
  );
};

export default Home;
