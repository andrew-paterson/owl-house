import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['confirm-cancel-container'],
	classNameBindings: ['align', 'containerClasses', 'colorScheme'],

	actions: {
		closePopoutBox: function() {
			this.set('popoutBoxName', false);
		},

		confirm: function() {
			this.sendAction('confirmAction');
			this.set('popoutBoxName', false);
		},
	}
});
