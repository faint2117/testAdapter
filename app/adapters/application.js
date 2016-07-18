// import JSONAPIAdapter from 'ember-data/adapters/json-api';
//
// export default RESTADAPTER.extend(
import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
  host: 'http://lstken100413',
  namespace: 'Introduction/api',
  headers: {
    'Accept': 'application/json'
  }
});
