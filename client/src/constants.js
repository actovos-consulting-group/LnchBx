export const FOURSQUARE = {
  url: 'https://api.foursquare.com/v2/venues',
  client_id: '***REMOVED***',
  client_secret: '***REMOVED***',
};

export const restaurantQueries = {
  getAllRestaurants: `${FOURSQUARE.url}/search?client_id=${FOURSQUARE.client_id}&client_secret=${FOURSQUARE.client_secret}&v=20200501&near=Oklahoma City&radius=15000&limit=50&query=restaurant`,
  getSelectedRestaurant: `${FOURSQUARE.url}/explore?client_id=${FOURSQUARE.client_id}&client_secret=${FOURSQUARE.client_secret}&v=20200501&intent=browse&radius=10000&ll=35.4746368,-97.51756800000001`,
};

export const API = {
  host: 'http://lnchbx.local:8000',
};
