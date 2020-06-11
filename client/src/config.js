// Exported mutable ref is just to handle synchronous try..catch.
// When do statements are added to JS, this won't be needed anymore.
// eslint-disable-next-line import/no-mutable-exports
let config = {};

try {
  config = JSON.parse(document.querySelector('#root').dataset.config);
} catch (error) {
  console.log('Failed to load app config vars');
}

export default config;
