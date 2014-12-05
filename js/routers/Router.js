;
(function(window, undefined) {

    window.app = window.app || {};

    var Router = Backbone.Router.extend({
        routes: {
            "Login": "Login",
            "BrowseAll": "BrowseAll",
            "BrowseLeague": "BrowseLeague",
            "BrowseByGame": "BrowseByGame",
            "BrowseByStream":"BrowseByStream",
            "BrowseByGame/:id": "Game",
            "*default": "Home"
        },
        Home: function() {
            console.log("home"),
            this.AppView.StreamView.randomStream();
        },
        BrowseAll: function() {
            console.log("BrowseAll");
            this.BrowseAll = new app.BrowseAll();
        },
        BrowseLeague: function() {
            console.log("BrowseLeague");
            this.BrowseLeague = new app.BrowseLeague();
        },
        BrowseByGame: function(){
            console.log("Browse by game");
            this.BrowseByGame = new app.BrowseByGame();
        },
        BrowseByStream: function(){
            console.log("Browse by stream");
            this.BrowseByStream = new app.BrowseByStream();
        },
        Game:function(){
            console.log(id);
        },
        initialize: function() {
            // app view
            this.AppView = new app.AppView();

            Backbone.history.start();
        }
    });

    app.Router = new Router();

})(window, undefined);
