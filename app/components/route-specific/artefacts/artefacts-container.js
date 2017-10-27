import Ember from 'ember';

export default Ember.Component.extend({
  contentMap: Ember.inject.service(),

  artefactContentMap: function() {
    var currentArtefact = this.get('contentMap.artefacts').findBy('metaTitle', this.get('artefact'))
    return currentArtefact;
  }.property('artefact'),

  title: function() {
    return this.get('artefactContentMap.title');
  }.property('artefactContentMap'),

  artefactContent: function() {
    return 'route-specific/artefacts/' + this.get('artefact');
  }.property('artefact'),

  artefactImagePaths: function() {
    var self = this;
    var imageSuffixes = this.get('artefactContentMap.contentImageSuffixes');
    var imagePaths = imageSuffixes.map(function(item, index, enumerable) {
      var imageDirectoryPath = item.indexOf('c_') !== -1 ? '/images/contextualised-artefacts/' : '/images/studio/';
      return imageDirectoryPath + self.get('artefact') + "_" + item + '.jpg';
    });
   return imagePaths;
  }.property('artefactContentMap'),
});
