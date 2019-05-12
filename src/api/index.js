import axios from "axios";

const { VUE_APP_WHATHER_APP_KEY, VUE_APP_GEOCODING_APP_KEY } = process.env;

export const getWeatherAPI = (lat, lon) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${VUE_APP_WHATHER_APP_KEY}&units=metric`
    )
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });
};

export const getLocalName = (lat, lon) => {
  return axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${VUE_APP_GEOCODING_APP_KEY}`
    )
    .then(res => res.data)
    .catch(err => console.log(err));
};
