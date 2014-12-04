;
(function(window, undefined) {
    "use strict";
    window.app = window.app || {};
    console.log("appview")
    var AppView = Backbone.View.extend({
        el: '#stream',
        initialize: function() {
            this.render();
        },
        render: function() {
            this.$el.html();
            console.log("app view render")
        }
    });
    app.AppView = AppView;
    // app.appView = new app.AppView();
})(window, undefined);
