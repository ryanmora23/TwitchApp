;
(function(window, undefined) {
    "use strict";
    console.log("twitch app")
    // window.CLIENT_ID = 'ga5f9gr1oxncd47jm48vc35gs6lvvhq';
    // $(function() {
    //     // Initialize. If we are already logged in, there is no
    //     // need for the connect button
    //     Twitch.init({
    //         clientId: CLIENT_ID
    //     }, function(error, status) {
    //         if (status.authenticated) {
    //             // we're logged in :)
    //             $('.status input').val('Logged in! Allowed scope: ' + status.scope);
    //             // Show the data for logged-in users
    //             $('.authenticated').removeClass('hidden');
    //         } else {
    //             $('.status input').val('Not Logged in! Better connect with Twitch!');
    //             // Show the twitch connect button
    //             $('.authenticate').removeClass('hidden');
    //         }
    //     });
    //     $('.twitch-connect').click(function() {
    //         Twitch.login({
    //             scope: ['user_read', 'channel_read']
    //         });
    //     });

    //     $('#logout button').click(function() {
    //         Twitch.logout();
    //         // Reload page and reset url hash. You shouldn't
    //         // need to do this.
    //         window.location = window.location.pathname;
    //     });

    //     $('#get-name button').click(function() {
    //         Twitch.api({
    //             method: 'user'
    //         }, function(error, user) {
    //             $('#get-name input').val(user.display_name);
    //         });
    //     });

    //     $('#get-stream-key button').click(function() {
    //         Twitch.api({
    //             method: 'channel'
    //         }, function(error, channel) {
    //             $('#get-stream-key input').val(channel.stream_key);
    //         });
    //     });

    // });
    // $.getJSON("https://api.twitch.tv/kraken/streams?live=true&callback=?").then(function(data) {
    //     console.log(data.streams);
    //     var ran = Math.random();
    //     ran = ran * data.streams.length;
    //     ran = Math.round(ran);
    //     document.getElementById("stream").innerHTML = '<object class="streamPlayer" type="application/x-shockwave-flash" data="//www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf" id="ember1081-flash-player" style="visibility:visible;"><param name="allowScriptAccess" value="always"><param name="allowFullScreen" value="true"><param name="wmode" value="opaque"><param name="bgcolor" value="000000"><param name="flashvars" value="id=ember1081-flash-player&hide_chat=&channel=' + data.streams[ran].channel.display_name + '&embed=0&auto_play=true&device_id=kVk3QHg&eventsCallback=Twitch.player.FlashPlayer2.callbacks.callback0"></object>';
    //     document.getElementById("chat").innerHTML = '<iframe frameborder="0"id="chat_embed" src="http://twitch.tv/chat/embed?channel=' + data.streams[ran].channel.display_name + '&amp;popout_chat=true" height="500" width="350"></iframe>';
    // });
})(window, undefined);
