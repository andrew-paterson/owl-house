import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['checkbox-label-container'],
	classNameBindings: ['disabled:disabled'],

	actions: {
		changedAction: function(selectedValue) {
			var fieldName = this.get('fieldName');
			this.sendAction("changedAction", selectedValue, fieldName);
		}
	}
});
