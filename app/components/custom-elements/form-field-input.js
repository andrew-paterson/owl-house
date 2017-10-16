import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['form-field'],
	classNameBindings: ['error:invalid', 'valid:valid', 'required:required', 'disabled:disabled', 'readonly:readonly', 'customClasses'],

	didInsertElement: function() {
		//Code below will maintain validation colours when component is re-rendered.
		Ember.run.once(this, function() {
			this.send('setError');
			if (this.get('autofocus') && !this.get('value')) {
				this.$('input').focus();
			}

			if (this.get('defaultInputIcon')) {
				this.set('inputIcon', this.get('defaultInputIcon'));
			}
		});
	},

	observeErrorChange: function() {
		this.send('setError');
	}.observes('error'),

	actions: {
		focusOutAction: function() {
			if (this.get('trim')) {
				this.set('value', this.get('value').trim());
			}
			this.sendAction('focusOutAction', this.get('fieldName'));
		},

		focusInAction: function() {
			this.set('error', null);
			this.sendAction('focusInAction', this.get('fieldName'));
		},

		keyUpAction: function() {
			this.sendAction('keyUpAction', this.get('fieldName'));
		},

		setError: function() {
			if (this.get('error')) {
				this.set('valid', false);
				this.set('inputIcon', "svg/icon-alert");
				return;
			}
			if (this.get('error') === false) {
				if (!this.get('hideValidationSuccess')) {
					this.set('valid', true);
					this.set('inputIcon', "svg/icon-tick");
				return;
				}

			}
			if (this.get('error') === null || this.get('error') === undefined) {
				this.set('valid', false);
				if (this.get('required')) {
					this.set('inputIcon', "svg/icon-asterisk");
				} else {
					this.set('inputIcon', this.get('defaultInputIcon'));
				}
				return;
			}
			if (this.get('required')) {
				this.set('inputIcon', "svg/icon-asterisk");
			}
		},
	}

});
