export const FOURSQUARE = {
  url: process.env.REACT_APP_FOURSQUARE_URL,
  client_id: process.env.REACT_APP_FOURSQUARE_CLIENT_ID,
  client_secret: process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET,
};

export const restaurantQueries = {
  getAllRestaurants: `${FOURSQUARE.url}/search?client_id=${FOURSQUARE.client_id}&client_secret=${FOURSQUARE.client_secret}&v=20200501&near=Oklahoma City&radius=15000&limit=50&query=restaurant`,
  getSelectedRestaurant: `${FOURSQUARE.url}/explore?client_id=${FOURSQUARE.client_id}&client_secret=${FOURSQUARE.client_secret}&v=20200501&intent=browse&radius=10000&ll=35.4746368,-97.51756800000001`,
};

export const API = {
  host: 'http://127.0.0.1:8000',
};

export const GOOGLE = {
  client_id: process.env.REACT_APP_GOOGLE_ID,
};
