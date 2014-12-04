;
(function(window, undefined) {
    "use strict";
    window.app = window.app || {};
    console.log("streamview")
    var StreamView = Backbone.View.extend({
        tagName: "div",
        className: "stream",
        template: "<div>stream view</div>",
        initialize: function() {
            this.render();
        },
        render: function() {
            console.log("streamview render");
            // $.getJSON("https://api.twitch.tv/kraken/streams?&live=true&callback=?").then(function(data) {
            //     console.log(data.streams);
            //     var ran = Math.random();
            //     ran = ran * data.streams.length;
            //     ran = Math.round(ran);
            //     document.getElementById("stream").innerHTML = '<object class="streamPlayer" type="application/x-shockwave-flash" data="//www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf" id="ember1081-flash-player" style="visibility:visible;"><param name="allowScriptAccess" value="always"><param name="allowFullScreen" value="true"><param name="wmode" value="opaque"><param name="bgcolor" value="000000"><param name="flashvars" value="id=ember1081-flash-player&hide_chat=&channel=' + data.streams[ran].channel.display_name + '&embed=0&auto_play=true&device_id=kVk3QHg&eventsCallback=Twitch.player.FlashPlayer2.callbacks.callback0"></object>';
            //     document.getElementById("chat").innerHTML = '<iframe frameborder="0"id="chat_embed" src="http://twitch.tv/chat/embed?channel=' + data.streams[ran].channel.display_name + '&amp;popout_chat=true" height="500" width="350"></iframe>';
            // });
        }
    })

    app.StreamView = StreamView;
})(window, undefined);
