import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['loader'],

	// didInsertElement: function() {
	// 	var topOffset = (this.$(window).height() - 110)/2;
	// 	Ember.$('.loading-graphics').css('top', topOffset);
	// }
});
