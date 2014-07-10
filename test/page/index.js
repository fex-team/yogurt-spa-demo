var json = require.resolve(__dirname + '/global.json');
delete require.cache[json];

var globalData = require(json);
var parseUrl = require('url').parse;

module.exports = function(req, res, done) {
    var url = parseUrl(req.originalUrl || req.url);

    globalData.navs.some(function(nav, key) {
        if (nav.url === url.pathname) {
            globalData.navs[key].active = true;
            return true;
        }
    });

    done(globalData);
};