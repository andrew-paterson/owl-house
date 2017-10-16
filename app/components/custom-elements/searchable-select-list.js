import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['searchable-select-list', 'form-field'],
  classNameBindings: ['error:invalid', 'valid:valid', 'required:required', 'disabled:disabled', 'readonly:readonly', 'includeSelectAllOption:includes-select-all-option', 'customClasses'],
  defaultSelectAllText: 'Select All',

  didInsertElement: function() {
    Ember.run.once(this, function() {
      this.send('setError');
      this.send('setValueToBoundProperty');
    });
  },

  updateSelectBoxValue: function() {
    this.send('setValueToBoundProperty');
  }.observes('boundProperty', 'value'),

  displayList: function() {
    var list = this.get('list');
    var typedChars = this.get('typedChars');
    if (typedChars) {
      list = list.filter(function(item) {
        return item.toLowerCase().indexOf(typedChars.toLowerCase()) > -1;
      });
    }
    if (this.get('includeSelectAllOption')) {
      var selectAllText = this.get('selectAllText') || this.get('defaultSelectAllText');
      if (list[0] !== selectAllText) {
        list.unshift(selectAllText);
      }
    }
    return list;
  }.property('list', 'typedChars'),

  observeErrorChange: function() {
    this.send('setError');
  }.observes('error'),

  actions: {
    setValueToBoundProperty: function() {
      if (this.get('boundProperty')) {
        this.set('displayValue', this.get('boundProperty'));
      } else if (this.get('value')) {
        this.set('displayValue', this.get('value'));
      } else {
        this.set('displayValue', this.get('label'));
      }
    },

    toggleList: function() {
      if (this.get('showSelectList')) {
        this.set('showSelectList', false);
      } else {
        this.set('showSelectList', true);
        this.set('error', null);
      }
    },

    focusOut: function() {
      this.set('inputValue', '');
      this.set('typedChars', '');
      this.set('showSelectList', false);
    },

    focusIn: function() {
      this.set('inputValue', '');
      this.set('typedChars', '');
      this.sendAction('selectItemAction', '');
    },

    //When a user types into the input.
    filterSelectList: function() {
      var typedChars = this.get('inputValue');
      this.set('typedChars', typedChars);
    },

    //When a list item is clicked.
    setSearchItem: function(item) {
      var selectAllText = this.get('selectAllText') || this.get('defaultSelectAllText');
      if (item === selectAllText) {
        item = null;
      }
      this.set('showSelectList', false);
      if (this.get('selectItemAction')) {
        this.sendAction('selectItemAction', item);
      } else {
        this.set('value', item);
      }
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
          this.set('inputIcon', null);
        }
        return;
      }
      if (this.get('required')) {
        this.set('inputIcon', "svg/icon-asterisk");
      }
    },
  }
});
