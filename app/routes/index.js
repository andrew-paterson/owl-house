import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  actions: {
    didTransition: function() {
        window.scrollTo(0,0);
        this.set('session.navCollapsed', true);
      },
    }
});
