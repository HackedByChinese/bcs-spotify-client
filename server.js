var express = require('express');

var app = express();

var SpotifyClient = require('./spotifyClient');

app.get('api/top-tracks', function(req, res, next) {
    var client = new SpotifyClient({
        accessToken: '<token here>'
    });

    client.getTopTracks()
        .then(function(result) {
            res.json(result);
        })
        .catch(next);
});

app.listen(8080, function() {
    console.log('Server listening on 8080');
});