import Ember from 'ember';

export default Ember.Component.extend({
  addNewTicket: false,
  actions: {
    ticketFormShow() {
      this.set('addNewTicket', true);
    },

    saveTicket() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        date_added: Date.now(),
        open: true
      };
      this.set('addNewTicket', false);
      this.sendAction('save', params);
    },


  }
});
