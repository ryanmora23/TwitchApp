;
(function(window, undefined) {
    "use strict";
    window.app = window.app || {};
    var AppView = Backbone.View.extend({
        el: '#stream',
        initialize: function() {
            this.render();
        },
        render: function() {
            this.StreamView = new app.StreamView();
        }
    });
    app.AppView = AppView;
})(window, undefined);
