import Ember from 'ember';
import { PerfectScrollbarMixin } from 'ember-perfect-scrollbar';

export default Ember.Component.extend(PerfectScrollbarMixin, {
  classNameBindings: ['customClasses'],

  perfectScrollbarOptions: {
      suppressScrollX: true,
      maxScrollbarLength: 200,
      minScrollbarLength: 40,
      wheelPropagation: true,
      swipePropagation: true,
  },
});
