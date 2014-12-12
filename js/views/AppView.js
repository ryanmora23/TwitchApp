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
            this.Stream = new app.Stream();
        }
    });
    // var goToStream = function(id) {
    //     document.getElementById("browseAll").innerHTML = "";
    //     document.getElementById("stream").innerHTML = '<object class="streamPlayer" type="application/x-shockwave-flash" data="//www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf" id="ember1081-flash-player" style="visibility:visible;"><param name="allowScriptAccess" value="always"><param name="allowFullScreen" value="true"><param name="wmode" value="opaque"><param name="bgcolor" value="000000"><param name="flashvars" value="id=ember1081-flash-player&hide_chat=&channel=' + (id) + '&embed=0&auto_play=true&device_id=kVk3QHg&eventsCallback=Twitch.player.FlashPlayer2.callbacks.callback0"></object>';
    //     document.getElementById("chat").innerHTML = '<iframe frameborder="0"id="chat_embed" src="http://twitch.tv/chat/embed?channel=' + id + '&amp;popout_chat=true" height="500" width="350"></iframe>';
    // }
    // var goToGame = function(id) {
    //     this.TwitchModel = new app.TwitchModel();
    //     document.getElementById("browseAll").innerHTML = "<div class='inline'><a href='#BrowseByGame'>Browse By Game</a></div><div class='inline'><a href='#BrowseByStream'>Browse By Top Streams</a></div><br>";
    //     document.getElementById("stream").innerHTML = "<div>" + stream.streams[i].channel.name + " - " + stream.streams[i].viewers + " viewers</div><img id = '"+stream.streams[i].channel.name+"' class = 'hover' onclick='goToStream(this.id)' src=" + stream.streams[i].preview.medium + " class='margin'>";
    //     document.getElementById("chat").innerHTML = "";
    // }
    // window.goToGame = goToGame;
    // window.goToStream = goToStream;
    app.AppView = AppView;
})(window, undefined);
