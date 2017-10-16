import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'span',
	classNames: ['toggle-button'],
	classNameBindings: ['classes', 'popoutBoxName:open:closed'],

	click() {
    if (!this.get('onHover')) {
      this.toggleProperty('popoutBoxName');
      this.sendAction("additionalAction", this.get('popoutBoxName'));
    }
  },

  mouseEnter() {
    if (this.get('onHover')) {
      this.set('popoutBoxName', true);
    }
  },

   // mouseLeave() {
   //  if (this.get('onHover')) {
   //    this.set('popoutBoxName', false);
   //  }
  // },
});
