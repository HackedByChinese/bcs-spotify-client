var request = require('request');

var spotifyRequest = request.defaults({
    baseUrl: 'https://api.spotify.com/v1',
    json: true
});

var SpotifyClient = function(options) {
    this.options = options;
    this.request = spotifyRequest.defaults({
        auth: {
            bearer: options.accessToken
        }
    });
}

SpotifyClient.prototype = {
    getTopTracks: function() {
        return new Promise((resolve, reject) => {
            this.request.get('me/top/tracks', {}, (err, response, body) => {
                if (err) {
                    return reject(err);
                }

                resolve(body)
            });
        });
    }
}

module.exports = SpotifyClient;

