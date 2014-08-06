$(document).ready(function(){

$(".highlight").mouseover(function(){
	$(this).css('backgroundColor','#f9e933');
});
$(".highlight").mouseout(function(){
	$(this).css('backgroundColor','');
});
$("img").hide(400).show(1000).hide(500).show(1000);
});
$("#b1").on('click', function(){
	$(".ToggleWithImage").toggle(700);
	$("img").toggle(700);

});
