;
(function(window, undefined) {
    "use strict";
    window.app = window.app || {};

    var BrowseByStream = Backbone.View.extend({
        tagName: "div",
        className: "Stream",
        template: "<div>browsebyStream</div>",
        el: "#browseAll",
        initialize: function() {
            document.getElementById("name").innerHTML = "";
            this.TwitchModel = new app.TwitchModel({
                limit: "100"
            });
            this.render();
        },
        render: function(){
            var self = this;
            this.$el.html("<div class='inline'><a href='#BrowseByGame'>Browse By Game</a></div><div class='inline'><a href='#BrowseByStream'>Browse By Top Streams</a></div><br>");
            this.TwitchModel.getStream().then(function(stream){
                console.log(stream);
                for(var i = 0; i<stream.streams.length; i++){
                    self.$el.append("<div>"+stream.streams[i].channel.name+" - "+stream.streams[i].game+ " - " + stream.streams[i].viewers+" viewers</div><a href='#'><img src="+stream.streams[i].preview.medium+" class='margin'></a>");
                }
                
            })
        }
    })

    app.BrowseByStream = BrowseByStream;
})(window, undefined);
