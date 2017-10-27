import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['gallery-item'],
  imagePath: function() {
    return '/images/studio-thumbnails/' + this.get('artefact.metaTitle') + '_s_1.jpg';
  }.property('artefact'),

  actions: {
    scrollToTop: function() {
      window.scrollTo(0,0);
    },
  }
});
