var currentPage = '';
var navs;

function refreshNav(page) {
    navs = navs || $('.navbar-nav li');
    if (!navs)return;
    
    navs
        .removeClass('active')
        .find('a[href="' + page + '"]')
        .parent()
        .addClass('active');
}

exports.init = function() {
    var nav = $('.navbar-nav');

    var curPage;
    nav.on('click', 'a', function(e) {
        var href = $(this).attr('href');
        curPage = href;

        BigPipe.load({
            url: href,
            pagelet: 'body',
            cb: function() {
                if (curPage === href) {
                    refreshNav(href);
                    
                    window.history && window.history.pushState(null, '', href);   
                }
            }
        })
        
        return false;
    });
};