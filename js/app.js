
window.onload = app;
// runs when the DOM is loaded
function app(){
    "use strict";
    // load some scripts (uses promises :D)
    loader.load(
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"},
        {url: "./bower_components/backbone/backbone.js"},
        {url: "./dist/style.css"},
        {url: "./js/TwitchApp.js"},
        {url: "./js/RiotApp.js"},
        {url: "./js/models/TwitchModel.js"},
        //views
        {url: "./js/views/AppView.js"},
        {url: "./js/views/StreamView.js"},
        //router
        {url: "./js/routers/Router.js"}
    ).then(function(){
        _.templateSettings.interpolate = /{([\s\S]+?)}/g;
        document.body.style.opacity = 1 ;
        // start app?
    });
}