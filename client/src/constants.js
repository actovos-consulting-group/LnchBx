import config from './config';
import queryString from 'query-string';

export const FOURSQUARE = {
  url: config.FOURSQUARE_URL,
  client_id: config.FOURSQUARE_CLIENT_ID,
  client_secret: config.FOURSQUARE_CLIENT_SECRET,
};

const allRestaurantParams = queryString.stringify({
  v: '20200501',
  near: 'Oklahoma City',
  radius: '15000',
  limit: '50',
  query: 'restaurant',
});

const selectedRestaurantParams = queryString.stringify({
  v: '20200501',
  intent: 'browse',
  radius: '10000',
  ll: '35.4746368,-97.51756800000001', // change this for your location or be better and use browser location services :)
});

export const restaurantQueries = {
  getAllRestaurants: `${FOURSQUARE.url}/search?client_id=${FOURSQUARE.client_id}&client_secret=${FOURSQUARE.client_secret}&${allRestaurantParams}`,
  getSelectedRestaurant: `${FOURSQUARE.url}/explore?client_id=${FOURSQUARE.client_id}&client_secret=${FOURSQUARE.client_secret}&${selectedRestaurantParams}`,
};

export const API = {
  host: window.location.origin,
};

export const GOOGLE = {
  client_id: config.GOOGLE_CLIENT_ID,
};
