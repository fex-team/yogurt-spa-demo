var director = require('../router/director.js');
var Router = director.Router;

module.exports.init = function() {
    var navs = $('.navbar-nav li');

    var refreshNav = function(page) {
        navs
            .removeClass('active')
            .find('a[href="#' + page + '"]')
            .parent()
            .addClass('active');
    };

    var page = 'home';

    var router = Router({

        home: function() {
            if (page === 'home') return;
            
            page = 'home';
            BigPipe.load({
                url: '/pagelets',
                pagelet: page,
                container: 'pages-container',
                cb: function() {
                    refreshNav(page);
                }
            });
        },

        about: function() {
            if (page === 'about') return;
            
            page = 'about';
            BigPipe.load({
                url: '/pagelets',
                pagelet: page,
                container: 'pages-container',
                cb: function() {
                    refreshNav(page);
                }
            });
        },

        contact: function() {
            if (page === 'contact') return;
            
            page = 'contact';
            BigPipe.load({
                url: '/pagelets',
                pagelet: page,
                container: 'pages-container',
                cb: function() {
                    refreshNav(page);
                }
            });
        }
    });


    router.init();
};