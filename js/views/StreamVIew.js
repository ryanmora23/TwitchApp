;
(function(window, undefined) {
    "use strict";
    window.app = window.app || {};

    var StreamView = Backbone.View.extend({
        tagName: "div",
        className: "stream",
        template: "<div>stream view</div>",
        el: "#name",
        initialize: function() {
            // this.TwitchModel = new app.TwitchModel();
        },
        render: function() {
            document.getElementById("quotes").style.display="";
            var quote = ["It's Dangerous to go alone..... take this!", "the princess is in another castle....", "Fox, do a barrel roll!", "Snake? SNAKE?!? SNAAAAAAAAAAAAAAAKE!!!!!!"]
            var i = ~~(Math.random() * quote.length);
            document.getElementById("quotes").innerHTML = "<div>" + quote[i] + "</div><br><button class='quoteButton button' onClick='self.window.app.StreamView.prototype.randomStream()'>Click for Random Stream</button><button class='refresh button'onClick='location.reload()'>Another Quote</button>";
        },
        randomStream: function() {
            var self = this;
            document.getElementById("quotes").style.display="none";
            this.TwitchModel = new app.TwitchModel();
            this.TwitchModel.getStream().then(function(stream) {
                var ran = Math.random();
                ran = ~~(ran * stream.streams.length);
                // self.$el.html(stream.streams[ran].channel.display_name)
                document.getElementById("name").innerHTML = stream.streams[ran].channel.display_name;
                document.getElementById("stream").innerHTML = '<object class="streamPlayer" type="application/x-shockwave-flash" data="//www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf" id="ember1081-flash-player" style="visibility:visible;"><param name="allowScriptAccess" value="always"><param name="allowFullScreen" value="true"><param name="wmode" value="opaque"><param name="bgcolor" value="000000"><param name="flashvars" value="id=ember1081-flash-player&hide_chat=&channel=' + stream.streams[ran].channel.display_name + '&embed=0&auto_play=true&device_id=kVk3QHg&eventsCallback=Twitch.player.FlashPlayer2.callbacks.callback0"></object>';
                document.getElementById("chat").innerHTML = '<iframe class="chatCont" frameborder="0"id="chat_embed" src="http://twitch.tv/chat/embed?channel=' + stream.streams[ran].channel.display_name + '&amp;popout_chat=true" height="500" width="350"></iframe>';
                document.getElementById("browseAll").innerHTML = "";
            })
        }
    })

    app.StreamView = StreamView;
})(window, undefined);
