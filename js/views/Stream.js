;
(function(window, undefined) {
    "use strict";
    window.app = window.app || {};

    var Stream = Backbone.View.extend({
        tagName: "div",
        className: "stream",
        template: "<div>stream view</div>",
        el: "#name",
        initialize: function() {
            // this.TwitchModel = new app.TwitchModel();
        },
        render: function() {
            document.getElementById("quotes").style.display="";
            var quote = ["'It's Dangerous to go alone! Take this!'<br>-Zelda", "'Thank you Mario, but the princess is in another castle....'<br>-Super Mario", "'Fox, do a barrel roll!'<br>-StarFox", "'Snake? SNAKE?!? SNAAAAAAAAAAAAAAAKE!!!!!!'<br>-Metal Gear Solid", "'HADOUKEN!'<br>-Street Fighter", "'He's on fire!'<br>-Nba Jams","'Finish Him!'<br>-Mortal Kombat", "'Nuclear Launch Detected'<br>-Starcraft:BroodWar"]
            var i = ~~(Math.random() * quote.length);
            document.getElementById("quotes").innerHTML = "<div>" + quote[i] + "</div><br><button class='quoteButton button' onClick='self.window.app.Stream.prototype.randomStream()'>Click to Enter</button><button class='refresh button'onClick='location.reload()'>Another Quote</button><br><iframe class='eightbit' width='560' height='315' src='//www.youtube.com/embed/B31LMRzuXi0?autoplay=1&start=4' frameborder='0' allowfullscreen></iframe>";
        },
        randomStream: function() {
            var self = this;
            document.getElementById("quotes").innerHTML="";
            document.getElementById("quotes").style.display = "none";
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


    app.Stream = Stream;
})(window, undefined);
