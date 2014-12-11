;
(function(window, undefined) {
    "use strict";
    window.app = window.app || {};
    var BrowseAll = Backbone.View.extend({
        el: '#browseAll',
        initialize: function() {
            document.getElementById("name").innerHTML = "";
            this.TwitchModel = new app.TwitchModel({});
            this.render();
        },
        render: function() {
            this.$el.html("<div class='browseCont'><div class='inline'><a href='#BrowseByGame'>Browse By Game</a></div><div class='inline'><a href='#BrowseByStream'>Browse By Top Streams</a></div></div><br><div class='gamePic'></div>");
            document.getElementById("stream").innerHTML = "";
            document.getElementById("chat").innerHTML = "";
        }
    });
    app.BrowseAll = BrowseAll;
})(window, undefined);
