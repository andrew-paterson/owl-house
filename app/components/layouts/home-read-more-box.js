import Ember from 'ember';

export default Ember.Component.extend({
  contentMap: Ember.inject.service(),

  title: function() {
    var currentArtefact = this.get('contentMap.artefacts').findBy('metaTitle', this.get('artefactMetaTitle'));
    return currentArtefact.title;
  }.property('artefactMetaTitle'),

  thumbnailPath: function() {
    return "/images/contextualised-artefacts-thumbnails/" + this.get('thumbnail');
  }.property('thumbnail'),
});
