$(document).ready(function(){
$('#respond').hide();

//subMenu
$('#dropmenu ul').hide();
$('#dropmenu li:has(ul)').hover(
	function(){
		$(this).children('ul').show(300);
	},
	function(){
		$(this).children('ul').hide(100);
});

//add subMenu symbol
$('#dropmenu li:has(ul)>a').addClass('subMenu').append(' ›');
$('#dropmenu ul a').prepend('╰►');

$('#dropmenu>li:first').hide();

//seminar List
var seminarListHide = $('.classTime').parent('ul').children('li').not($('.classTime'));
$('.classTime').not('.latest').nextAll('li').hide().end().end().click(function(){
	$(this).nextAll('li').slideToggle(100);
});
$('.classTime').parent().parent().children('ul:first').before('<div class="toggleSeminarList"><a class="openAll">[＋] Open All</a><a class="closeAll">[－] Close All</a></div>');
$('.toggleSeminarList').children('.closeAll').click(function(){
		seminarListHide.hide();
	}).end().children('.openAll').click(function(){
		seminarListHide.show();
});

//for keyborad user
$('#dropmenu li:has(ul)>a').focus(function(){
	$(this).next('ul').slideToggle(100);
});

});