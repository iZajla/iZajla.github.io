var images_n = new Array(
	'img/nainen_vatsa1_50.png', 
	'img/nainen_vatsa2_50.png', 
	'img/nainen2_sp1_50.png', 
	'img/nainen2_sp2_50.png', 
	'img/nainen_suoni2_70.png',
	'img/nainen_suoni1_70.png',
	'img/nainen_keuhkot1_50.png',
	'img/nainen_keuhkot2_50.png',
	'img/nainen_keuhkot3_50.png',
	'img/nainen_keuhkot4b_50.png',
	'img/nainen_sikio1_50.png'
 );
 
 
var cn = 0;
function preload_cbn(){ 
	cn++;
	if(cn==images_n.length){
		$('#loader_n').hide();
	}
}
 
function preloader_n() 
 {
	 var i = 0;
	 var imageObj_n = new Array();

	 for(i=0; i<images_n.length; i++) 
	 {
	 	  imageObj_n[i] = new Image();
	 	  imageObj_n[i].onload = preload_cbn;
		  imageObj_n[i].src=images_n[i];
	 }
 
 } 

$(document).ready(function(){

	preloader_n();

});