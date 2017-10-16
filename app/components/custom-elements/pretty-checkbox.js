import Ember from 'ember';

export default Ember.Component.extend({
	tagName: '',

	actions: {
	    changedAction: function(value) {
	      	this.sendAction('changedAction', value);
	    }
	}
});
