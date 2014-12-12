;
(function(window, undefined) {
    "use strict";
    window.app = window.app || {};

    var BrowseLeague = Backbone.View.extend({
        tagName: "div",
        className: "Stream",
        template: "<div>browseLeague</div>",
        el: "#browseAll",
        initialize: function() {
            document.getElementById("name").innerHTML = "";
            this.TwitchModel = new app.TwitchModel({
                limit: "100",
                game: "League of Legends"
            });
            this.clearPage();
            this.render();
        },
        render: function() {
            var self = this;
            this.$el.html("");
            this.TwitchModel.getStream().then(function(stream) {
                for (var i = 0; i < stream.streams.length; i++) {
                    self.$el.append("<div class='previewCont'><div class='name2'>" + stream.streams[i].channel.name + " - " + stream.streams[i].viewers + " viewers</div><img class = 'goToStream hover' id = '" + stream.streams[i].channel.name + "' class = 'hover' src=" + stream.streams[i].preview.medium + " class='margin'></div>");
                }

            })
        },
        clearPage: function() {
            document.getElementById("stream").innerHTML = "";
            document.getElementById("chat").innerHTML = "";
        },
        events: {
            "click .goToStream": "goToStream"
        },
        goToStream: function(e) {
            var self = this;
            var target = e.currentTarget.id;
            var riotRef;
            var target2 = target;
            if (target == "crs_saintvicious") {
                target2 = "crsstvicious";
            } else if (target == "trick2g") {
                target2 = "kingtrick"
            } else if (target == "tsm_theoddone") {
                target2 = "theoddone";
            } else if (target == "clgdoublelift") {
                target2 = "doublelift";
            } else if (target == "curse_piglet") {
                target2 = "crspiglet";
            } else if (target == "tsm_dyrus") {
                target2 = "dyrus";
            } else if (target =="lolgeranimo"){
                target2 = "geranimo";
            }
            $.get("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + target2 + "?api_key=12f0278a-f805-4892-9cd3-1e37634d523c").then(function(riot) {
                riotRef = riot;
                document.getElementById("browseAll").innerHTML = "";
                document.getElementById("stream").innerHTML = '<object class="streamPlayer" type="application/x-shockwave-flash" data="//www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf" id="' + target + '" style="visibility:visible;"><param name="allowScriptAccess" value="always"><param name="allowFullScreen" value="true"><param name="wmode" value="opaque"><param name="bgcolor" value="000000"><param name="flashvars" value="id=ember1081-flash-player&hide_chat=&channel=' + target + '&embed=0&auto_play=true&device_id=kVk3QHg&eventsCallback=Twitch.player.FlashPlayer2.callbacks.callback0"></object>';
                document.getElementById("chat").innerHTML = '<iframe frameborder="0"id="chat_embed" src="http://twitch.tv/chat/embed?channel=' + target + '&amp;popout_chat=true" height="500" width="350"></iframe>';
            }).then(function() {
                $.get("https://na.api.pvp.net/api/lol/na/v2.2/matchhistory/" + riotRef[target2].id + "?rankedQueues=RANKED_SOLO_5x5&api_key=12f0278a-f805-4892-9cd3-1e37634d523c").then(function(match) {
                    console.log(match.matches);
                    console.log(riotRef[target2].id);
                    self.$el.html("");
                    document.getElementById("browseAll").innerHTML += "<div class='matchHistory'>Match History</div>";
                    for (var i = 0; i < match.matches.length; i++) {
                        var obj = JSON.stringify(match.matches[i].participants[0].stats);
                        var time = ~~((match.matches[i].matchDuration)/60)+":"+match.matches[i].matchDuration%60;
                        console.log(time);
                        var stats = "<div class='statistics one'><div>Match Length:"+time+"</div><div> Level: "+match.matches[i].participants[0].stats.champLevel+"</div>"
                        stats += "<div> Double Kills: "+match.matches[i].participants[0].stats.doubleKills+"</div>"
                        stats += "<div> Triple Kills: "+match.matches[i].participants[0].stats.tripleKills+"</div>"
                        stats += "<div> Quadra Kills: "+match.matches[i].participants[0].stats.quadraKills+"</div>"
                        stats += "<div> Penta Kills: "+match.matches[i].participants[0].stats.pentaKills+"</div>"
                        stats += "<div> First Blood?: "+match.matches[i].participants[0].stats.firstBloodKill+"</div>"
                        stats += "<div> Gold: "+match.matches[i].participants[0].stats.goldEarned+"</div>"
                        stats += "<div> Game Won: "+match.matches[i].participants[0].stats.winner+"</div></div>"
                        var kills = "<div class='statistics two'><div> Assists: "+match.matches[i].participants[0].stats.assists+"</div><div> Deaths: "+match.matches[i].participants[0].stats.deaths+"</div><div> Kills: "+match.matches[i].participants[0].stats.kills+"</div><div> Largets Killing Spree: "+match.matches[i].participants[0].stats.largestKillingSpree+"</div><div> Largest Multi Kill: "+match.matches[i].participants[0].stats.largestMultiKill+"</div><div> Minions Slain: "+match.matches[i].participants[0].stats.minionsKilled+"</div><div> Jungle Minions Killed: "+match.matches[i].participants[0].stats.neutralMinionsKilled+"</div><div> Towers Destroyed: "+match.matches[i].participants[0].stats.towerKills+"</div><div> Wards Killed: "+match.matches[i].participants[0].stats.wardsKilled+"</div><div> Wards Placed: "+match.matches[i].participants[0].stats.wardsPlaced+"</div></div>"
                        var damage = "<div class='statistics three'><div> Magic Damage Dealt: "+match.matches[i].participants[0].stats.magicDamageDealt+"</div><div> Magic Damage done to Champs: "+match.matches[i].participants[0].stats.magicDamageDealtToChampions+"</div><div> Physical Damage Dealt: "+match.matches[i].participants[0].stats.physicalDamageDealt+"</div><div> Physical Damage dealt to champs: "+match.matches[i].participants[0].stats.physicalDamageDealtToChampions+"</div><div> Total Damage: "+match.matches[i].participants[0].stats.totalDamageDealt+"</div><div> Total Damage Dealt to champs: "+match.matches[i].participants[0].stats.totalDamageDealtToChampions+"</div></div>"
                        document.getElementById("browseAll").innerHTML += "<div class='matches'><div id = 'game" + i + "' class= '" + match.matches[i].participants[0].championId + "'>" +stats+damage+kills+ "</div></div>";
                    }
                    self.champImage();
                })
            })
        },
        champImage: function() {
            var num = document.getElementById("game0").className;
            $.get("https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion/" + num + "?api_key=12f0278a-f805-4892-9cd3-1e37634d523c").then(function(url) {
                console.log("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + url.name + "_0.jpg");
                document.getElementById("game0").innerHTML += "<div class='champ'>Champion: " + url.name+"</div>";
                if (url.name.indexOf("'") != -1) {
                    url.name = url.name.replace("'", "");
                    if (url.name != "RekSai" && url.name != "KogMaw") {
                        url.name = url.name.charAt(0) + url.name.slice(1).toLowerCase();
                    }
                }
                if (url.name.indexOf(" ") != -1) {
                    url.name = url.name.replace(" ", "");
                }
                if (url.name != "XinZhao" && url.name != "RekSai" && url.name != "LeeSin" && url.name != "TwistedFate" && url.name != "MissFortune" && url.name != "KogMaw" && url.name !="MasterYi" && url.name != "FiddleSticks") {
                    url.name = url.name.charAt(0) + url.name.slice(1).toLowerCase();
                }
                if(url.name == "Fiddlesticks"){
                    url.name = "FiddleSticks";
                }

                document.getElementById("game0").style.backgroundImage = 'url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + url.name + '_0.jpg")';

            })
            var num1 = document.getElementById("game1").className;
            $.get("https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion/" + num1 + "?api_key=12f0278a-f805-4892-9cd3-1e37634d523c").then(function(url) {
                console.log("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + url.name + "_0.jpg");
                document.getElementById("game1").innerHTML += "<div class='champ'>Champion: " + url.name+"</div>";
                if (url.name.indexOf("'") != -1) {
                    url.name = url.name.replace("'", "");
                    if (url.name != "RekSai" && url.name != "KogMaw") {
                        url.name = url.name.charAt(0) + url.name.slice(1).toLowerCase();
                    }
                }
                if (url.name.indexOf(" ") != -1) {
                    url.name = url.name.replace(" ", "");
                }
                if (url.name != "XinZhao" && url.name != "RekSai" && url.name != "LeeSin" && url.name != "TwistedFate" && url.name != "MissFortune" && url.name != "KogMaw" && url.name !="MasterYi" && url.name != "FiddleSticks") {
                    url.name = url.name.charAt(0) + url.name.slice(1).toLowerCase();
                }
                if(url.name == "Fiddlesticks"){
                    url.name = "FiddleSticks";
                }

                document.getElementById("game1").style.backgroundImage = 'url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + url.name + '_0.jpg")';

            })
            var num2 = document.getElementById("game2").className;
            $.get("https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion/" + num2 + "?api_key=12f0278a-f805-4892-9cd3-1e37634d523c").then(function(url) {
                console.log("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + url.name + "_0.jpg");
                document.getElementById("game2").innerHTML += "<div class='champ'>Champion: " + url.name+"</div>";
                if (url.name.indexOf("'") != -1) {
                    url.name = url.name.replace("'", "");
                    if (url.name != "RekSai" && url.name != "KogMaw") {
                        url.name = url.name.charAt(0) + url.name.slice(1).toLowerCase();
                    }
                }
                if (url.name.indexOf(" ") != -1) {
                    url.name = url.name.replace(" ", "");
                }
                if (url.name != "XinZhao" && url.name != "RekSai" && url.name != "LeeSin" && url.name != "TwistedFate" && url.name != "MissFortune" && url.name != "KogMaw" && url.name !="MasterYi" && url.name != "FiddleSticks") {
                    url.name = url.name.charAt(0) + url.name.slice(1).toLowerCase();
                }
                if(url.name == "Fiddlesticks"){
                    url.name = "FiddleSticks";
                }

                document.getElementById("game2").style.backgroundImage = 'url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + url.name + '_0.jpg")';

            })
            var num3 = document.getElementById("game3").className;
            $.get("https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion/" + num3 + "?api_key=12f0278a-f805-4892-9cd3-1e37634d523c").then(function(url) {
                console.log("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + url.name + "_0.jpg");
                document.getElementById("game3").innerHTML += "<div class='champ'>Champion: " + url.name+"</div>";
                if (url.name.indexOf("'") != -1) {
                    url.name = url.name.replace("'", "");
                    if (url.name != "RekSai" && url.name != "KogMaw") {
                        url.name = url.name.charAt(0) + url.name.slice(1).toLowerCase();
                    }
                }
                if (url.name.indexOf(" ") != -1) {
                    url.name = url.name.replace(" ", "");
                }
                if (url.name != "XinZhao" && url.name != "RekSai" && url.name != "LeeSin" && url.name != "TwistedFate" && url.name != "MissFortune" && url.name != "KogMaw" && url.name !="MasterYi" && url.name != "FiddleSticks") {
                    url.name = url.name.charAt(0) + url.name.slice(1).toLowerCase();
                }
                if(url.name == "Fiddlesticks"){
                    url.name = "FiddleSticks";
                }

                document.getElementById("game3").style.backgroundImage = 'url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + url.name + '_0.jpg")';

            })
            var num4 = document.getElementById("game4").className;
            $.get("https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion/" + num4 + "?api_key=12f0278a-f805-4892-9cd3-1e37634d523c").then(function(url) {
                console.log("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + url.name + "_0.jpg");
                document.getElementById("game4").innerHTML += "<div class='champ'>Champion: " + url.name+"</div>";
                if (url.name.indexOf("'") != -1) {
                    url.name = url.name.replace("'", "");
                    if (url.name != "RekSai" && url.name != "KogMaw") {
                        url.name = url.name.charAt(0) + url.name.slice(1).toLowerCase();
                    }
                }
                if (url.name.indexOf(" ") != -1) {
                    url.name = url.name.replace(" ", "");
                }
                if (url.name != "XinZhao" && url.name != "RekSai" && url.name != "LeeSin" && url.name != "TwistedFate" && url.name != "MissFortune" && url.name != "KogMaw" && url.name !="MasterYi" && url.name != "FiddleSticks") {
                    url.name = url.name.charAt(0) + url.name.slice(1).toLowerCase();
                }
                if(url.name == "Fiddlesticks"){
                    url.name = "FiddleSticks";
                }

                document.getElementById("game4").style.backgroundImage = 'url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + url.name + '_0.jpg")';

            })
            var num5 = document.getElementById("game5").className;
            $.get("https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion/" + num5 + "?api_key=12f0278a-f805-4892-9cd3-1e37634d523c").then(function(url) {
                console.log("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + url.name + "_0.jpg");
                document.getElementById("game5").innerHTML += "<div class='champ'>Champion: " + url.name+"</div>";
                if (url.name.indexOf("'") != -1) {
                    url.name = url.name.replace("'", "");
                    if (url.name != "RekSai" && url.name != "KogMaw") {
                        url.name = url.name.charAt(0) + url.name.slice(1).toLowerCase();
                    }
                }
                if (url.name.indexOf(" ") != -1) {
                    url.name = url.name.replace(" ", "");
                }
                if (url.name != "XinZhao" && url.name != "RekSai" && url.name != "LeeSin" && url.name != "TwistedFate" && url.name != "MissFortune" && url.name != "KogMaw" && url.name !="MasterYi" && url.name != "FiddleSticks") {
                    url.name = url.name.charAt(0) + url.name.slice(1).toLowerCase();
                }
                if(url.name == "Fiddlesticks"){
                    url.name = "FiddleSticks";
                }

                document.getElementById("game5").style.backgroundImage = 'url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + url.name + '_0.jpg")';

            })
            var num6 = document.getElementById("game6").className;
            $.get("https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion/" + num6 + "?api_key=12f0278a-f805-4892-9cd3-1e37634d523c").then(function(url) {
                console.log("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + url.name + "_0.jpg");
                document.getElementById("game6").innerHTML += "<div class='champ'>Champion: " + url.name+"</div>";
                if (url.name.indexOf("'") != -1) {
                    url.name = url.name.replace("'", "");
                    if (url.name != "RekSai" && url.name != "KogMaw") {
                        url.name = url.name.charAt(0) + url.name.slice(1).toLowerCase();
                    }
                }
                if (url.name.indexOf(" ") != -1) {
                    url.name = url.name.replace(" ", "");
                }
                if (url.name != "XinZhao" && url.name != "RekSai" && url.name != "LeeSin" && url.name != "TwistedFate" && url.name != "MissFortune" && url.name != "KogMaw" && url.name !="MasterYi" && url.name != "FiddleSticks") {
                    url.name = url.name.charAt(0) + url.name.slice(1).toLowerCase();
                }
                if(url.name == "Fiddlesticks"){
                    url.name = "FiddleSticks";
                }

                document.getElementById("game6").style.backgroundImage = 'url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + url.name + '_0.jpg")';

            })
            var num7 = document.getElementById("game7").className;
            $.get("https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion/" + num7 + "?api_key=12f0278a-f805-4892-9cd3-1e37634d523c").then(function(url) {
                console.log("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + url.name + "_0.jpg");
                document.getElementById("game7").innerHTML += "<div class='champ'>Champion: " + url.name+"</div>";
                if (url.name.indexOf("'") != -1) {
                    url.name = url.name.replace("'", "");
                    if (url.name != "RekSai" && url.name != "KogMaw") {
                        url.name = url.name.charAt(0) + url.name.slice(1).toLowerCase();
                    }
                }
                if (url.name.indexOf(" ") != -1) {
                    url.name = url.name.replace(" ", "");
                }
                if (url.name != "XinZhao" && url.name != "RekSai" && url.name != "LeeSin" && url.name != "TwistedFate" && url.name != "MissFortune" && url.name != "KogMaw" && url.name !="MasterYi" && url.name != "FiddleSticks") {
                    url.name = url.name.charAt(0) + url.name.slice(1).toLowerCase();
                }
                if(url.name == "Fiddlesticks"){
                    url.name = "FiddleSticks";
                }

                document.getElementById("game7").style.backgroundImage = 'url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + url.name + '_0.jpg")';

            })
            var num8 = document.getElementById("game8").className;
            $.get("https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion/" + num8 + "?api_key=12f0278a-f805-4892-9cd3-1e37634d523c").then(function(url) {
                console.log("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + url.name + "_0.jpg");
                document.getElementById("game8").innerHTML += "<div class='champ'>Champion: " + url.name+"</div>";
                if (url.name.indexOf("'") != -1) {
                    url.name = url.name.replace("'", "");
                    if (url.name != "RekSai" && url.name != "KogMaw") {
                        url.name = url.name.charAt(0) + url.name.slice(1).toLowerCase();
                    }
                }
                if (url.name.indexOf(" ") != -1) {
                    url.name = url.name.replace(" ", "");
                }
                if (url.name != "XinZhao" && url.name != "RekSai" && url.name != "LeeSin" && url.name != "TwistedFate" && url.name != "MissFortune" && url.name != "KogMaw" && url.name !="MasterYi" && url.name != "FiddleSticks") {
                    url.name = url.name.charAt(0) + url.name.slice(1).toLowerCase();
                }
                if(url.name == "Fiddlesticks"){
                    url.name = "FiddleSticks";
                }

                document.getElementById("game8").style.backgroundImage = 'url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + url.name + '_0.jpg")';

            })
            var num9 = document.getElementById("game9").className;
            $.get("https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion/" + num9 + "?api_key=12f0278a-f805-4892-9cd3-1e37634d523c").then(function(url) {
                console.log("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + url.name + "_0.jpg");
                document.getElementById("game9").innerHTML += "<div> Champion: " + url.name + "</div>";
                if (url.name.indexOf("'") != -1) {
                    url.name = url.name.replace("'", "");
                    if (url.name != "RekSai" && url.name != "KogMaw") {
                        url.name = url.name.charAt(0) + url.name.slice(1).toLowerCase();
                    }
                }
                if (url.name.indexOf(" ") != -1) {
                    url.name = url.name.replace(" ", "");
                }
                if (url.name != "XinZhao" && url.name != "RekSai" && url.name != "LeeSin" && url.name != "TwistedFate" && url.name != "MissFortune" && url.name != "KogMaw") {
                    url.name = url.name.charAt(0) + url.name.slice(1).toLowerCase();
                }

                document.getElementById("game9").style.backgroundImage = 'url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + url.name + '_0.jpg")';

            })
        }

    })
    app.BrowseLeague = BrowseLeague;

})(window, undefined);
