import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  actions: {
    willTransition: function() {
      this.set('session.navCollapsed', true);
    }
  }

});
