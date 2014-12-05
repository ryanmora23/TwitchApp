;
(function(window, undefined) {
    "use strict";
    window.app = window.app || {};
    var LoginView = Backbone.View.extend({
        tagName: "div",
        className: "Login",
        initialize: function() {
            this.render();
        },
        render: function() {
            window.CLIENT_ID = 'ga5f9gr1oxncd47jm48vc35gs6lvvhq';
            $(function() {
                // Initialize. If we are already logged in, there is no
                // need for the connect button
                Twitch.init({
                    clientId: CLIENT_ID
                }, function(error, status) {
                    if (status.authenticated) {
                        // we're logged in :)
                        $('.status input').val('Logged in! Allowed scope: ' + status.scope);
                        // Show the data for logged-in users
                        $('.authenticated').removeClass('hidden');
                    } else {
                        $('.status input').val('Not Logged in! Better connect with Twitch!');
                        // Show the twitch connect button
                        $('.authenticate').removeClass('hidden');
                    }
                });
                $('.twitch-connect').click(function() {
                    Twitch.login({
                        scope: ['user_read', 'channel_read']
                    });
                });

                $('#logout button').click(function() {
                    Twitch.logout();
                    window.location = window.location.pathname;
                });

                $('#get-name button').click(function() {
                    Twitch.api({
                        method: 'user'
                    }, function(error, user) {
                        $('#get-name input').val(user.display_name);
                    });
                });

                $('#get-stream-key button').click(function() {
                    Twitch.api({
                        method: 'channel'
                    }, function(error, channel) {
                        $('#get-stream-key input').val(channel.stream_key);
                    });
                });
            })

        }
    })
    app.LoginView = LoginView;
})(window, undefined);
