$(function() {
var selectedClass = "";
$(".filter").click(function(){
selectedClass = $(this).attr("data-rel");
$("#gallery").fadeTo(100, 0.1);
$("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
setTimeout(function() {
$("."+selectedClass).fadeIn().addClass('animation');
$("#gallery").fadeTo(300, 1);
}, 500);
});
});


$('.modal').on('show.bs.modal', function () {
	$(this).find('.modal-dialog').show();
	$(this).find('.modal-body').show();
	$(this).find('.modal-footer').show();
	$(this).find('.modal-content').show();
	console.log($(this).html());
})