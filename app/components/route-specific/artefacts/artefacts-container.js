import Ember from 'ember';

export default Ember.Component.extend({
  contentMap: Ember.inject.service(),

  thisArtefactMetaData: function() {
    var currentArtefact = this.get('contentMap.artefacts').findBy('metaTitle', this.get('artefact'))
    return currentArtefact;
  }.property('artefact'),

  title: function() {
    return this.get('thisArtefactMetaData.title');
  }.property('thisArtefactMetaData'),

  artefactContent: function() {
    return 'route-specific/artefacts/' + this.get('artefact');
  }.property('artefact'),

  artefactImagePaths: function() {
    var self = this;
    var imageSuffixes = this.get('thisArtefactMetaData.contentImageSuffixes');
    var imagePaths = imageSuffixes.map(function(item, index, enumerable) {
      var imageDirectoryPath = item.indexOf('c_') !== -1 ? '/images/contextualised-artefacts/' : '/images/studio/';
      return imageDirectoryPath + self.get('artefact') + "_" + item + '.jpg';
    });
   return imagePaths;
  }.property('thisArtefactMetaData'),

  paginationLinks: function() {
    var thisArtefactMetaData = this.get('thisArtefactMetaData');
    // Find the highest id in the content map
    var ids = this.get('contentMap.artefacts').getEach('id');
    var highestId = (ids.sort(function(a, b){return b-a}))[0];
    console.log(thisArtefactMetaData.id);
    console.log(this.get('contentMap.artefacts').findBy('id', thisArtefactMetaData.id - 1));
    var nextArtefact = thisArtefactMetaData.id < highestId ? (this.get('contentMap.artefacts').findBy('id', thisArtefactMetaData.id + 1)).metaTitle : null;
    var prevArtefact = thisArtefactMetaData.id > 1 ? (this.get('contentMap.artefacts').findBy('id', thisArtefactMetaData.id - 1)).metaTitle : null;
    return {
      next: nextArtefact,
      prev: prevArtefact
    }
  }.property('artefact'),

  actions: {
    scrollToTop: function() {
      window.scrollTo(0,0);
    },
  }
});
