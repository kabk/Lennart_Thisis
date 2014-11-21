var serverTime = new Date();

function updateTime() {
    serverTime = new Date(serverTime.getTime() + 1000);
    $('#time').html(serverTime.toDateString()+" - "+serverTime.getHours()+":"+serverTime.getMinutes()+":"+serverTime.getSeconds());
}

$(function() {
    updateTime();
    setInterval(updateTime, 1000);
});

$( document ).ready(function() {
	$( "#timemainBox" ).width(($( window ).width())-200);
});

$( document ).resize(function(){
	$( "#timemainBox" ).width(($( window ).width())-200);
});