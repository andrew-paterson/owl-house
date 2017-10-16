import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service(),
	classNames: ['submit-input-container', 'spinner-container', 'button', 'large'],
	classNameBindings: ['session.requestInFlight:spin', 'classes'],
});
