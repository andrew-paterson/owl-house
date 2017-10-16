import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service(),
  tagName: 'div',
	classNames: ['wrapper', 'interface'],
	classNameBindings: ['classes', 'session.navCollapsed:nav-collapsed'],
  actions: {
      toggleFullNav:function() {
        this.toggleProperty('session.navCollapsed');
      },
    }
});
