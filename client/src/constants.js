export const FOURSQUARE = {
  url: 'https://api.foursquare.com/v2/venues',
  client_id: 'GD3LF2ISQJU1XIOQ24HYQQFQTPW0MXQIO1VZUT2GM2R4PNHM',
  client_secret: '5UNGCKSZLQWDUR43YXL2NOAA2T5FEBBU20RYA5KLEEF34QSI',
};

export const restaurantQueries = {
  getAllRestaurants: `${FOURSQUARE.url}/search?client_id=${FOURSQUARE.client_id}&client_secret=${FOURSQUARE.client_secret}&v=20200501&near=Oklahoma City&radius=15000&limit=50&query=restaurant`,
  getSelectedRestaurant: `${FOURSQUARE.url}/explore?client_id=${FOURSQUARE.client_id}&client_secret=${FOURSQUARE.client_secret}&v=20200501&intent=browse&radius=10000&ll=35.4746368,-97.51756800000001`,
};

export const API = {
  host: 'http://127.0.0.1:8000',
};
