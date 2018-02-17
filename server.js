var express = require('express');
var session = require('express-session');
var passport = require('passport');
var app = express();

// configure middleware
app.use(require('cookie-parser')());
app.use(session({
    secret: 'keyboard cat', resave: false,
    saveUninitialized: false
}));

// configure passport
require('./passport')(app);

var SpotifyClient = require('./spotifyClient');

app.get(
    '/', 
    // passport.authorize('spotify'), 
    function(req, res, next) {
        var client = new SpotifyClient({
            accessToken: req.user.accessToken
        });

        client.getTopTracks()
            .then(function(result) {
                res.json(result);
            })
            .catch(next);
    }
);

// DO NOT sync in production
var db = require('./models');
db.sequelize.sync({force: true}).then(function() {
    app.listen(8888, function () {
        console.log('Server listening on 8080');
    });
});
