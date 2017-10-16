import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['pop-up-box'],
	classNameBindings: ['popoutBoxName:open:closed'],

	actions: {
		closePopoutBox: function() {
			this.set('popoutBoxName', false);
		},
	}
});