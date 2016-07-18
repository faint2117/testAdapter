import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
  host: 'http://lstken100413',
  namespace: 'Introduction/api/entities',
  headers: {
    'Accept': 'application/json'
  }
});
