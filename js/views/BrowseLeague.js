;
(function(window, undefined) {
    "use strict";
    window.app = window.app || {};

    var BrowseLeague = Backbone.View.extend({
        tagName: "div",
        className: "Stream",
        template: "<div>browseLeague</div>",
        el: "#browseAll",
        initialize: function() {
            document.getElementById("name").innerHTML = "";
            this.TwitchModel = new app.TwitchModel({
                limit: "100",
                game: "League of Legends"
            });
            this.clearPage();
            this.render();
        },
        render: function() {
            var self = this;
            this.$el.html("");
            this.TwitchModel.getStream().then(function(stream) {
                for (var i = 0; i < stream.streams.length; i++) {
                    self.$el.append("<div>" + stream.streams[i].channel.name + " - " + stream.streams[i].viewers + " viewers</div><img id = '"+stream.streams[i].channel.name+"' class = 'hover' onclick='goToStream(this.id)' src=" + stream.streams[i].preview.medium + " class='margin'>");
                }

            })
        },
        clearPage: function() {
            document.getElementById("stream").innerHTML = "";
            document.getElementById("chat").innerHTML = "";
        }
    })
    app.BrowseLeague = BrowseLeague;
})(window, undefined);
