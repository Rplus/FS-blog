$(document).ready(function() {
    $('#respond').hide();

    var dropmenu = $('#dropmenu');

    //subMenu
    dropmenu.find('ul').hide();
    dropmenu.find('li:has(ul)').hover(function() {
        $(this).children('ul').slideDown(300);
    }, function() {
        $(this).children('ul').slideUp(100);
    });

    //for keyborad user
    dropmenu.find('li:has(ul)>a').focus(function() {
        $(this).next('ul').slideToggle(100);
    });

    //add subMenu symbol
    dropmenu.find('li:has(ul) > a').addClass('subMenu').append(' ›');
    dropmenu.find('ul a').prepend('╰►');
    dropmenu.find('> li:first').hide();

    //seminar List
    var seminarListHide = $('.classTime').parent('ul').children('li').not($('.classTime'));
    $('.classTime').not('.latest').nextAll('li').hide().end().end().click(function() {
        $(this).nextAll('li').slideToggle(100);
    });
    $('.classTime').parent().parent().children('ul:first').before('<div class="toggleSeminarList"><a class="openAll">[＋] Open All</a><a class="closeAll">[－] Close All</a></div>');
    $('.toggleSeminarList').children('.closeAll').click(function() {
        seminarListHide.hide();
    }).end().children('.openAll').click(function() {
        seminarListHide.show();
    });

    // latest news' link
    (function () {
        var now = new Date();
        var _year = now.getFullYear();

        if (now.getMonth() < 7) { // < August
            _year -= 1
        }

        $('.page-item-217').children('a').attr('href', location.origin + '/' + _year);
    })();
});