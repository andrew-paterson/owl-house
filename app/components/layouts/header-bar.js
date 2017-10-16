import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service(),
	tagName: 'header',
	classNameBindings: ['systemMessage:system-message-active', 'systemMessage.type'],

	didInsertElement: function() {
		Ember.run.once(this, function() {
			if (localStorage.getItem('hyrax.admin_api.session.api_key')) {
				this.set('authenticated', true);
			} else {
				this.set('authenticated', false);
			}
		});
	},

	user: function() {
		return this.get('session.user');
	}.property('session.user'),

});
