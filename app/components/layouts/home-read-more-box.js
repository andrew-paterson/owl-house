import Ember from 'ember';

export default Ember.Component.extend({
  contentMap: Ember.inject.service(),
  session: Ember.inject.service(),

  didInsertElement: function() {

    console.log(this.get('popoutBoxName'));
  },

  thumbnailPath: function() {
    return "/images/contextualised-artefacts-thumbnails/" + this.get('artefact.metaTitle') + '_c_1.jpg';
  }.property('artefact.thumbnail'),

  actions: {
    scrollToTop: function() {
      window.scrollTo(0,0);
    },

    setzIndex: function() {
      console.log('test');
      var newIndex = this.get('session.readMorePopUpCurrentZIndex') + 1;
      this.set('session.readMorePopUpCurrentZIndex', newIndex);
      this.$('.pop-up-box').css('z-index', newIndex);
    },
  }
});
