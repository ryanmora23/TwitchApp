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
            var doc = "";
            this.clearPage();
            this.AppView.StreamView.render();
            if (doc == document.URL) {
                document.body.style.backgroundImage = 'url("http://i.imgur.com/XGBgv.png")'
                document.body.style.backgroundSize = '100% 500%'
            } else {
                document.body.style.backgroundImage = "";
                document.body.backgroundSize = "";
            }
        },
        BrowseAll: function() {
            this.BrowseAll = new app.BrowseAll();
            var doc = document.URL;
            if (doc == document.URL) {
                document.body.style.backgroundImage = 'url("http://i.imgur.com/XGBgv.png")'
                document.body.style.backgroundSize = '100% 500%'
            } else {
                document.body.style.backgroundImage = "";
                document.body.backgroundSize = "";
            }
        },
        BrowseLeague: function() {
            var doc = "";
            this.BrowseLeague = new app.BrowseLeague();
            if (doc == document.URL) {
                document.body.style.backgroundImage = 'url("http://i.imgur.com/XGBgv.png")'
                document.body.style.backgroundSize = '100% 500%'
            } else {
                document.body.style.backgroundImage = "";
                document.body.backgroundSize = "";
            }
        },
        BrowseByGame: function() {
            var doc = "";
            this.BrowseByGame = new app.BrowseByGame();
            if (doc == document.URL) {
                document.body.style.backgroundImage = 'url("http://i.imgur.com/XGBgv.png")'
                document.body.style.backgroundSize = '100% 500%'
            } else {
                document.body.style.backgroundImage = "";
                document.body.backgroundSize = "";
            }
        },
        BrowseByStream: function() {
            var doc = "";
            this.BrowseByStream = new app.BrowseByStream();
            if (doc == document.URL) {
                document.body.style.backgroundImage = 'url("http://i.imgur.com/XGBgv.png")'
                document.body.style.backgroundSize = '100% 500%'
            } else {
                document.body.style.backgroundImage = "";
                document.body.backgroundSize = "";
            }
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
