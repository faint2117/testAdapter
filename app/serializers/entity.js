import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
// Change response to match with another format
// import RESTSerializer from 'ember-data/serializers/rest';
//
// export default RESTSerializer.extend({
  // normalizeResponse(store, primaryModelClass, payload, id, requestType) {
  //   payload = {
  //     entities: payload.data
  //   };
  //
  //   return this._super(store, primaryModelClass, payload, id, requestType);
  // }
});
