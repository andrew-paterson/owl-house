import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['gallery-item'],
  imagePath: function() {
    console.log(this.get('artefact.metaTitle'));
    console.log(this.get('artefact.title'));

    return '/images/studio/' + this.get('artefact.metaTitle') + '_s_1.jpg';
  }.property('artefact'),
});
