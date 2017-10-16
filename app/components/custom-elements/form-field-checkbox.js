import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['checkbox-label-container'],
	classNameBindings: ['disabled:disabled'],

	actions: {
		changedAction: function() {
			this.sendAction('changedAction', this.get('machineName'));
		}
	}
});
