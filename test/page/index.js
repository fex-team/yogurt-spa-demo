module.exports = function(req, res, next) {

    // 读取 json 数据
    function loadJson(id) {
        var jsonFile = '../pagelets/' + id + '.json';
        var data = {};

        try {
            jsonFile = require.resolve(jsonFile);

            delete require.cache[jsonFile];
            data = require(jsonFile);
        } finally {
            return data;
        }
    }

    next({

        title: 'Welcome to yogurt!',

        onPagelet: function(id, cb) {
            data  = loadJson(id);
            
            // need to wait?
            if (data.wait) {
                setTimeout(function() {
                    cb(null, data);
                }, data.wait);
            } else {
                cb(null, data);
            }
        }

    });
}