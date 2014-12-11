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
        render: function() {
            var self = this;
            // this.$el.html("<div class='inline'><a href='#BrowseByGame'>Browse By Game</a></div><div class='inline'><a href='#BrowseByStream'>Browse By Top Streams</a></div><br>");
            this.TwitchModel.getStream().then(function(stream) {
                console.log(stream);
                for (var i = 0; i < stream.streams.length; i++) {
                    self.$el.append("<div>" + stream.streams[i].channel.name + " - " + stream.streams[i].game + " - " + stream.streams[i].viewers + " viewers</div><img id = '" + stream.streams[i].channel.name + "'src='" + stream.streams[i].preview.medium + "' class='goToStream margin hover' >");
                }

            })
        },
        events: {
            "click .goToStream": "goToStream"
        },
        goToStream: function(e) {
            document.getElementById("browseAll").innerHTML = "";
            document.getElementById("stream").innerHTML = '<object class="streamPlayer" type="application/x-shockwave-flash" data="//www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf" id="ember1081-flash-player" style="visibility:visible;"><param name="allowScriptAccess" value="always"><param name="allowFullScreen" value="true"><param name="wmode" value="opaque"><param name="bgcolor" value="000000"><param name="flashvars" value="id=ember1081-flash-player&hide_chat=&channel=' + e.currentTarget.id + '&embed=0&auto_play=true&device_id=kVk3QHg&eventsCallback=Twitch.player.FlashPlayer2.callbacks.callback0"></object>';
            document.getElementById("chat").innerHTML = '<iframe frameborder="0"id="chat_embed" src="http://twitch.tv/chat/embed?channel=' + e.currentTarget.id + '&amp;popout_chat=true" height="500" width="350"></iframe>';
        }
    })

    app.BrowseByStream = BrowseByStream;
})(window, undefined);
