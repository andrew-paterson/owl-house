import Ember from 'ember';

export default Ember.TextField.extend({
	type: 'file',

    change: function(e) {
        var input = e.target;
        if (!Ember.isEmpty(input.files)) {
            this.send('sendFiles', input.files);
            Ember.$(".file-select-button")[0].reset();
        }
    },

    actions: {
        sendFiles: function(files) {
            this.sendAction('sendFiles', files);
        },
    }
});
