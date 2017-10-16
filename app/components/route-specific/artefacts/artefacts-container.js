import Ember from 'ember';

export default Ember.Component.extend({
  contentMap: Ember.inject.service(),

  title: function() {
    var currentArtefact = this.get('contentMap.artefacts').findBy('metaTitle', this.get('artefact'))
    return currentArtefact.title;
  }.property('artefact'),

  artefactContent: function() {
    return 'route-specific/artefacts/' + this.get('artefact');
  }.property('artefact'),
});
