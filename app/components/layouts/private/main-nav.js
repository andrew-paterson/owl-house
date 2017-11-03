import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service(),
  contentMap: Ember.inject.service(),
	tagName: 'div',
	classNames: ['nav-sidebar'],
	classNameBindings: ['session.navCollapsed:nav-collapsed'],

  artefacts: function() {
    return this.get('contentMap.artefacts');
  }.property('contentMap'),

  actions: {
    hideNav: function() {
      console.log('test');
      window.scrollTo(0,0);
      this.set('session.navCollapsed', true);
    }
  }
});
