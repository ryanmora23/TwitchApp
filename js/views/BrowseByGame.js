;
(function(window, undefined) {
    "use strict";
    window.app = window.app || {};

    var BrowseByGame = Backbone.View.extend({
        tagName: "div",
        className: "game",
        template: "<div>browsebygame</div>",
        el: "#browseAll",
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
            var putOnPage = "";
            for (var i = 0; i < this.uniqueNames.length; i++) {
                if (this.uniqueNames[i] === null) {
                    continue;
                }
                putOnPage += "<div class = 'hover goToGame' id='" + this.uniqueNames[i].split(' ').join('') + "'>" + this.uniqueNames[i] + "</div><br>";
            }
            this.$el.html("<div class='inline'><a href='#BrowseByGame'>Browse By Game</a></div><div class='inline'><a href='#BrowseByStream'>Browse By Top Streams</a></div><br>");
            this.$el.append(putOnPage);
        },
        events: {
            "click .goToGame": "goToGame",
            "click .goToStream": "goToStream"
        },
        goToGame: function(e) {
            this.$el.html("");
            var target = $(e.currentTarget);
            console.log(target[0].innerHTML);
            document.getElementById("name").innerHTML = "";
            this.TwitchModel = new app.TwitchModel({
                limit: "100",
                game: target[0].innerHTML
            });
            this.clearPage();
            this.renderGames();
        },
        clearPage: function() {
            document.getElementById("stream").innerHTML = "";
            document.getElementById("chat").innerHTML = "";
        },
        renderGames: function() {
            var self = this;
            this.$el.html("");
            this.TwitchModel.getStream().then(function(stream) {
                for (var i = 0; i < stream.streams.length; i++) {
                    self.$el.append("<div>" + stream.streams[i].channel.name + " - " + stream.streams[i].viewers + " viewers</div><img class = 'goToStream hover' id = '" + stream.streams[i].channel.name + "' class = 'hover' src=" + stream.streams[i].preview.medium + " class='margin'>");
                }

            })
        },
        goToStream: function(e) {
            document.getElementById("browseAll").innerHTML = "";
            document.getElementById("stream").innerHTML = '<object class="streamPlayer" type="application/x-shockwave-flash" data="//www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf" id="ember1081-flash-player" style="visibility:visible;"><param name="allowScriptAccess" value="always"><param name="allowFullScreen" value="true"><param name="wmode" value="opaque"><param name="bgcolor" value="000000"><param name="flashvars" value="id=ember1081-flash-player&hide_chat=&channel=' + e.currentTarget.id + '&embed=0&auto_play=true&device_id=kVk3QHg&eventsCallback=Twitch.player.FlashPlayer2.callbacks.callback0"></object>';
            document.getElementById("chat").innerHTML = '<iframe frameborder="0"id="chat_embed" src="http://twitch.tv/chat/embed?channel=' + e.currentTarget.id + '&amp;popout_chat=true" height="500" width="350"></iframe>';
        }
    })

    app.BrowseByGame = BrowseByGame;
})(window, undefined);
