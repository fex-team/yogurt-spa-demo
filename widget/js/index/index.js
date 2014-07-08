var director = require('../router/director.js');
var Router = director.Router;

var currentPage = '';
var navs;

function refreshNav(page) {
    navs = navs || $('.navbar-nav li');
    if (!navs)return;
    
    navs
        .removeClass('active')
        .find('a[href="#' + page + '"]')
        .parent()
        .addClass('active');
}

function home() {
    var page = 'home';
    if (currentPage === page) return;
    currentPage = page;
    BigPipe.load({
        url: '/pagelets',
        pagelet: page,
        container: 'pages-container',
        cb: function() {
            page === currentPage && refreshNav(page);
        }
    });
}

function contact() {
    var page = 'contact';
    if (currentPage === page) return;
    currentPage = page;
    BigPipe.load({
        url: '/pagelets',
        pagelet: page,
        container: 'pages-container',
        cb: function() {
            page === currentPage && refreshNav(page);
        }
    });
}

function about() {
    var page = 'about';
    if (currentPage === page) return;
    currentPage = page;
    BigPipe.load({
        url: '/pagelets',
        pagelet: page,
        container: 'pages-container',
        cb: function() {
            page === currentPage && refreshNav(page);
        }
    });
}

exports.init = function() {
    var router = new Router({
        home: home,
        contact: contact,
        about: about
    });
    router.init('home');
};