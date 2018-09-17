/*
var images = new Array(
	'img/blank_10.gif',
	'img/nc_layer112_100.gif',
	'img/nc_layer113_50.gif',
	'img/nc_layer114_50.gif',
	'img/nc_layer115_50.gif',
	'img/nc_layer116_50.gif',
	'img/nainen2_30.jpg',
	'img/nainen2_50.jpg',
	'img/nainen1b_30.jpg',
	'img/nainen1_50.jpg',
	'img/mc_layer112_100.gif',
	'img/mc_layer113_50.gif',
	'img/mc_layer114_50.gif',
	'img/mc_layer115_50.gif',
	'img/mc_layer116_50.gif',
	'img/mc_layer117_100.gif',
	'img/mies1_30.jpg',
	'img/mies2_30.jpg',
	'img/mies1_50.jpg',
	'img/mies2_50.jpg',
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