import Ember from 'ember';

export default Ember.Component.extend({
	tagName: '',
	didInsertElement: function() {
		Ember.run.once(this, function() {
			if (localStorage.getItem('hyrax.admin_api.session.api_key')) {
				this.set('authenticated', true);
			} else {
				this.set('authenticated', false);
			}
		});
	},
});
