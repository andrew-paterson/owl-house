import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'footer',

  didInsertElement: function() {
    Ember.run.once(this, function() {
      if (localStorage.getItem('hyrax.admin_api.apiEndpoint')) {
        this.set('customEndpoint', localStorage.getItem('hyrax.admin_api.apiEndpoint'));
      }
    });
  },

  actions: {
    logout: function() {
      console.log('logout');
      this.sendAction('logout');
    }
  }
});
