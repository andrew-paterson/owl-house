import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service(),
	classNames: ['wrapper', 'public'],
	classNameBindings: ['classes', 'session.placeholdersSupported:placeholders'],
});
