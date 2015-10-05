import DS from 'ember-data';

export default DS.Model.extend({
  tickets: DS.hasMany('ticket', {async: true})
});
