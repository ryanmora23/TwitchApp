;
(function(window, undefined) {
    "use strict";
    window.app = window.app || {};

    var TwitchModel = Backbone.Model.extend({
        defaults: {
            search: "League of Legends",
            format: "json",
            api_key: "ga5f9gr1oxncd47jm48vc35gs6lvvhq",
            live: "true",
            limit: "25",
            offset: "0",
            game: ""
        },
        urlRoot: function() {
            return [
                "https://api.twitch.tv/kraken/streams?",
                "live=",
                this.get("live"),
                "&limit=",
                this.get("limit"),
                "&offset=",
                this.get("offset"),
                "&game=",
                this.get("game"),
                "&callback=?"
            ].join("");
        },
        getStream: function() {
            var self = this;
            return this.fetch().then(function(model) {
                return model;
            })
        }
    });
    app.TwitchModel = TwitchModel;
})(window, undefined);