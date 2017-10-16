import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['radio-checkbox-wrapper'],
  classNameBindings: ['boundProperty:checked:unchecked', 'disabled:disabled'],

  actions: {
    sendChangedAction() {
      this.sendAction('changedAction');
    },
  }
});