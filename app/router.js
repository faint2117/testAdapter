import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('products');
  this.route('entities');
  this.route('logs');
});

export default Router;
