;
(function(window, undefined) {
    "use strict";
    window.app = window.app || {};

    var BrowseByGame = Backbone.View.extend({
        tagName: "div",
        className: "game",
        template: "<div>browsebygame</div>",
        el:"#browseAll",
        initialize: function() {
            document.getElementById("name").innerHTML = "";
            document.getElementById("stream").innerHTML = "";
            document.getElementById("chat").innerHTML = "";
            this.TwitchModel = new app.TwitchModel({
                limit: "100"
            });
            this.AnotherTwitchModel = new app.TwitchModel({
                limit: "100",
                offset: "100",
            })
            var array = [];
            var uniqueNames = [];
            var self = this;
            var question = 0;
            this.TwitchModel.getStream().then(function(stream) {
                for (var i = 0; i < stream.streams.length; i++) {
                    array.push(stream.streams[i].game);
                }
            }).then(
                this.AnotherTwitchModel.getStream().then(function(stream) {
                    for (var i = 0; i < stream.streams.length; i++) {
                        array.push(stream.streams[i].game);
                    }
                    $.each(array, function(i, el) {
                        if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
                    });

                    self.uniqueNames = uniqueNames;
                    self.render();
                }))

        },
        render: function() {
        	console.log(this.uniqueNames)
            debugger;
        	var putOnPage = "";
            for(var i = 0; i<this.uniqueNames.length; i++){
                if(this.uniqueNames[i]===null){
                    continue;
                }
            	putOnPage += "<a href=#"+this.uniqueNames[i].split(' ').join('')+">"+this.uniqueNames[i]+"</a><br>";
            }
            this.$el.html("<div class='inline'><a href='#BrowseByGame'>Browse By Game</a></div><div class='inline'><a href='#BrowseByStream'>Browse By Top Streams</a></div><br>");
        	this.$el.append(putOnPage);
        }
    })

    app.BrowseByGame = BrowseByGame;
})(window, undefined);
