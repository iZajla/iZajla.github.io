/*
var images = new Array(
	'img/mies_keuhkot1_50.png',
	'img/mies_keuhkot2_50.png',
	'img/mies_keuhkot3_50.png', 
	'img/mies_keuhkot4_50.png',
	'img/sperm1_100.png', 
	'img/sperm2_100.png',
	'img/nainen_keuhkot1_50.png',
	'img/nainen_keuhkot2_50.png',
	'img/nainen_keuhkot3_50.png', 
	'img/icon_male2.png',
	'img/icon_female2.png',
	'img/slider-start-50.png',
	'img/slider3-50.png',
	'img/logo2_se.png',
	'img/logo2_en.png'
 );
 

var cb = 0;
function preload_cb(){ 
	cb++;
	if(cb==images.length){
		$('#loader').hide();
	}
}
 
 
function preloader() 
 {
	 var i = 0;
	 var imageObj = new Array();

	 for(i=0; i<images.length; i++) 
	 {
	 	  imageObj[i] = new Image();
	 	  imageObj[i].onload = preload_cb;
		  imageObj[i].src=images[i];
	 }
 
 } 

$(document).ready(function(){

	preloader();

});
*/