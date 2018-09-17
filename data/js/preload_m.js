var images_m = new Array(
	'img/mies_suoni1_70.png',		
	'img/mies_keuhkot1_50.png',		
	'img/mies_keuhkot3_50.png',		
	'img/mies_vatsa1b_50.png',		
	'img/mies_sp1_50.png',			
	'img/sperm1_100.png',
	'img/mies_suoni3_70.png',
	'img/mies_keuhkot4_50.png',		
	'img/mies_vatsa2b_50.png',
	'img/mies_sp2_50.png',
	'img/sperm2_100.png'
 );

 
var cm = 0;
function preload_cbm(){ 
	cm++;
	if(cm==images_m.length){
		$('#loader_m').hide();
	}
}

 
function preloader_m() 
 {
	 var i = 0;
	 var imageObj_m = new Array();

	 for(i=0; i<images_m.length; i++) 
	 {
	 	  imageObj_m[i] = new Image();
	 	  imageObj_m[i].onload = preload_cbm;
		  imageObj_m[i].src=images_m[i];
	 }
 
 } 

$(document).ready(function(){

	preloader_m();

});