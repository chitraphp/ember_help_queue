import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  date_added: DS.attr(),
  open: DS.attr()
});
