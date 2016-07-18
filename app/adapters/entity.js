import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: 'http://lstken100413',
  namespace: 'Introduction/api',
  headers: {
    'Accept': 'application/json'
  }
});
