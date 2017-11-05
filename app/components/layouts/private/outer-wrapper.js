import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service(),
  tagName: 'div',
	classNames: ['wrapper', 'interface'],
	classNameBindings: ['classes', 'session.navCollapsed:nav-collapsed'],

  didInsertElement: function() {
    if (localStorage.getItem('owlhouseAuthenticated') === 'true') {
      this.set('authenticated', true);
    }
  },

  actions: {
    login: function() {
      if (this.get('password') === 'misshelen') {
        localStorage.setItem('owlhouseAuthenticated', true);
        this.set('authenticated', true);
      }
    },

    logout: function() {
      console.log('logout');
      localStorage.removeItem('owlhouseAuthenticated');
      this.set('authenticated', false);
    }
  }

});
