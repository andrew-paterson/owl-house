import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service(),
	tagName: 'div',
	classNames: ['system-message'],
	classNameBindings: ['systemMessage.type'],

	messageIcon: function() {
		return this.get('systemMessage.type') === 'success' ? 'svg/icon-tick' : 'svg/icon-alert';
	}.property('systemMessage.type'),

	actions: {
		dismissMessage: function() {
			this.set('systemMessage', null);
		}
	}
});
