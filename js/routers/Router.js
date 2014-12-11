;
(function(window, undefined) {

    window.app = window.app || {};

    var Router = Backbone.Router.extend({
        routes: {
            "BrowseAll": "BrowseAll",
            "BrowseLeague": "BrowseLeague",
            "BrowseByGame": "BrowseByGame",
            "BrowseByStream": "BrowseByStream",
            "BrowseByGame/:id": "Game",
            "*default": "Home"
        },
        Home: function() {
            this.clearPage();
            this.AppView.StreamView.render();
        },
        BrowseAll: function() {
            document.getElementById("quotes").style.display = "none";
            this.BrowseAll = new app.BrowseAll();
        },
        BrowseLeague: function() {
            document.getElementById("quotes").style.display = "none";
            this.BrowseLeague = new app.BrowseLeague();
        },
        BrowseByGame: function() {
            document.getElementById("quotes").style.display = "none";
            this.BrowseByGame = new app.BrowseByGame();
        },
        BrowseByStream: function() {
            document.getElementById("quotes").style.display = "none";
            this.BrowseByStream = new app.BrowseByStream();
        },
        Game: function() {
            console.log(id);
        },
        initialize: function() {
            // app view
            this.AppView = new app.AppView();

            Backbone.history.start();
        },
        clearPage: function() {
            document.getElementById("browseAll").innerHTML = "";
            document.getElementById("stream").innerHTML = "";
            document.getElementById("chat").innerHTML = "";
        }
    });

    app.Router = new Router();

})(window, undefined);
