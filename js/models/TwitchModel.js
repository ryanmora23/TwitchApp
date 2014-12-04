;
(function(window, undefined) {
    "use strict";
    window.app = window.app || {};
    console.log("twitch model")
    var TwitchModel = Backbone.Model.extend({
        defaults: {
            search: "League of Legends",
            format: "json",
            api_key: "ga5f9gr1oxncd47jm48vc35gs6lvvhq",
            live: "true"
        },
        urlRoot: function() {
            return [
                "https://api.twitch.tv/kraken/streams?",
                "live=",
                this.get("live"),
                "&callback=?"
            ].join("");
        },
        getStream: function() {
            var self = this;
            app.poop = new app.StreamView();
            return this.fetch().then(function(model) {
                console.log(model);
                return model;
            })
        }
    });
    app.TwitchModel = TwitchModel;
})(window, undefined);
