import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
 date: attr('date'),
 level: attr('string'),
 logger: attr('string'),
 message: attr('string')
});
