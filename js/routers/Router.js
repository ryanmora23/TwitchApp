;(function(window, undefined){

    window.app = window.app || {};

    var Router = Backbone.Router.extend({
        routes: {
            "*default": "page1"
        },
        page1: function(){
            console.log("page1");
            // this.StreamView.render();
            this.TwitchModel.getStream();
            console.log("hi")
            app.poop.render();
        },
        initialize: function(){
            // app view
            console.log("router")
            this.AppView = new app.AppView();
            // this.StreamView = new app.StreamView();
            this.TwitchModel = new app.TwitchModel();

            Backbone.history.start();
        }
    });

    app.Router = new Router();

})(window, undefined);