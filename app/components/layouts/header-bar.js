import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  session: Ember.inject.service(),
  actions: {
    toggleFullNav:function() {
      window.scrollTo(0,0);
      this.toggleProperty('session.navCollapsed');
    },
  }
});
