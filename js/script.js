/**
 * Created by Zurab on 09.12.15.
 */
;

/* fancybox */
$(document).ready(function() {
	$(".fancybox").fancybox();
});

/* error */
$('#error__close').click(function(){
	$('#error').toggleClass('hiddenError');
	return false;
});




/* modal */
$('.free').click(function(){
	$('.modal-popup').css('visibility', 'hidden');
	return false;
});




/* phone */
jQuery(function($){
	$("#phone1").mask("(999) 999-99-99");
	$("#phone2").mask("(999) 999-99-99");
	$("#phone3").mask("(999) 999-99-99");
	$("#phone4").mask("(999) 999-99-99");
});
