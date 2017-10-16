import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['radio-checkbox-wrapper'],
	classNameBindings: ['checked:checked:unchecked', 'disabled:disabled'],	
});
