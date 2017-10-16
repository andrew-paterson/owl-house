import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['in-page-alert'],
	classNameBindings: ['type', 'classes'],
});
