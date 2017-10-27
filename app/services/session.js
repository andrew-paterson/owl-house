import Ember from 'ember';

export default Ember.Service.extend({
	navCollapsed: true,
	hideContent: null,
	loginMessage: '',
	abortedTransition: '',
	placeholdersSupported: '',
	fileAPISupported: '',
	user: {},
	passwordConfirmation: '',
	userUiState: {},
  readMorePopUpCurrentZIndex: 2,
});