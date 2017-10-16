import Ember from 'ember';

var computed = Ember.computed;

export default Ember.Component.extend({
  tagName: 'input',
  type: 'radio',

  defaultLayout: null, // ie8 support

  attributeBindings: [
    'checked',
    'disabled',
    'name',
    'required',
    'type',
    'value',
    'tabindex'
  ],

  checked: computed('boundProperty', 'value', function(){
    return this.get('boundProperty') === this.get('value');
  }).readOnly(),

  change: function() {
    var value = this.get('value');
    this.sendAction('changedAction', value);
  }
});
