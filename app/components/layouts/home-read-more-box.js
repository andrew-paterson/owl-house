import Ember from 'ember';

export default Ember.Component.extend({
  contentMap: Ember.inject.service(),

  thumbnailPath: function() {
    return "/images/contextualised-artefacts-thumbnails/" + this.get('artefact.metaTitle') + '_c_1.jpg';
  }.property('artefact.thumbnail'),
});
