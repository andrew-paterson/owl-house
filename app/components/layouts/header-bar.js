import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  session: Ember.inject.service(),
  actions: {
    toggleFullNav:function() {
      console.log('test');
      this.toggleProperty('session.navCollapsed');
    },
  }
});
