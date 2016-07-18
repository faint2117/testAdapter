import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('product');
    // return $.getJSON("http://localhost:60643/api/Products").then(
    //   function(response) {
    //     return response.products;
    //   }
    // );
  }
});
