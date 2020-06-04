import axios from 'axios';
import queryString from 'query-string';

const getOptions = () => {
  return { baseURL: window.location.origin };
};

function getCookieValue(a) {
  const b = document.cookie.match(`(^|[^;]+)\\s*${a}\\s*=\\s*([^;]+)`);
  return b ? decodeURIComponent(b.pop()) : '';
}

export function getXSRFToken() {
  return getCookieValue('XSRF-TOKEN');
}

const client = () => {
  return {
    delete: (url, options = {}) =>
      axios.delete(url, { ...getOptions(), ...options }),
    get: (url, queryParams = {}, options = {}) => {
      let parsedUrl = url;

      if (queryParams && Object.keys(queryParams).length > 0) {
        parsedUrl = `
          ${url}?${queryString.stringify(queryParams, {
          arrayFormat: 'bracket',
        })}
        `;
      }

      return axios.get(parsedUrl, options);
    },
    post: (url, data, options = {}) =>
      axios.post(url, data, { ...getOptions(), ...options }),
    put: (url, data, options = {}) =>
      axios.put(url, data, { ...getOptions(), ...options }),
    patch: (url, data, options = {}) =>
      axios.patch(url, data, { ...getOptions(), ...options }),
  };
};

const request = client();

export default request;
