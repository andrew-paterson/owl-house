import Ember from 'ember';

export default Ember.Component.extend({
    type: 'div',
    classNames: ['input-file-wrapper', 'button'],
    classNameBindings: ['classes'],

    actions: {
        sendFiles: function(files) {
            this.sendAction('fileProcessingAction', files, this.get('allowedFileTypesList'));
        },
    }
});
