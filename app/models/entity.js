import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  description: attr('string'),
  ranking: attr('number'),
  status: attr('string')
});
