"use server";

const baseUrl = "http://api.weatherapi.com/v1";

export const getCurrentWeather = async () => {
  const data = await fetch(
    `${baseUrl}/current.json?key=${process.env.WEATHER_APP_API_KEY}&q=Thailand&aqi=yes`
  )
    .then((res) => res.json())
    .then((responseData) => {
      return responseData;
    });

  return data;
};
