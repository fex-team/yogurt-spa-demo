var director = require('../router/director.js');
var Router = director.Router;

var currentPage = '';
var navs;

function refreshNav(page) {
    if (!navs)return;
    navs
        .removeClass('active')
        .find('a[href="#' + page + '"]')
        .parent()
        .addClass('active');
}

function home() {
    if (currentPage === 'home') return;
    
    var page = 'home';
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
    if (currentPage === 'contact') return;
        
    currentPage = 'contact';
    BigPipe.load({
        url: '/pagelets',
        pagelet: currentPage,
        container: 'pages-container',
        cb: function() {
            refreshNav(currentPage);
        }
    });
}

function about() {
    if (currentPage === 'about') return;
        
    currentPage = 'about';
    BigPipe.load({
        url: '/pagelets',
        pagelet: currentPage,
        container: 'pages-container',
        cb: function() {
            refreshNav(currentPage);
        }
    });
}

exports.init = function() {
    var navs = $('.navbar-nav li');
    var router = new Router({
        home: home,
        contact: contact,
        about: about
    });
    
    router.init('home');
};