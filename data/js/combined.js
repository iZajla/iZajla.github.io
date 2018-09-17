/* STANDARD.JS */

var layers = new Array(
	'#layer100',
	'#layer101',
	'#layer112',
	'#layer113',
	'#layer114',
	'#layer115',
	'#layer116',
	'#layer117',
	'#layer118',
	'#layer119',
	'#layer200',
	'#layer201',
	'#layer212',
	'#layer213',
	'#layer214',
	'#layer215',
	'#layer216',
	'#layer217',
	'#layer218',
	'#layer219'
);

var mInit = new Array(
	'img/kaveri_fresh_15.jpg',
	'img/mies_f_hires_100.jpg',
	'img/clear_100.gif',
	'img/clear_100.gif',
	'img/clear_100.gif',
	'img/clear_100.gif',
	'img/clear_100.gif',
	'img/clear_100.gif',
	'img/clear_100.gif',
	'img/clear_100.gif',
	'img/kaveri_tuhka_15.jpg',
	'img/mies_t_hires_100.jpg',
	'img/clear_100.gif',
	'img/clear_100.gif',
	'img/clear_100.gif',
	'img/clear_100.gif',
	'img/clear_100.gif',
	'img/clear_100.gif',
	'img/clear_100.gif',
	'img/clear_100.gif'
);

var nInit = new Array(
	'img/mimmi_fresh_15.jpg',
	'img/nainen_f_hires_100.jpg',
	'img/nc_layer112_100.gif',
	'img/nc_layer112_100.gif',
	'img/nc_layer112_100.gif',
	'img/nc_layer112_100.gif',
	'img/nc_layer112_100.gif',
	'img/nc_layer112_100.gif',
	'img/nc_layer112_100.gif',
	'img/nc_layer112_100.gif',
	'img/mimmi_tuhka_15.jpg',
	'img/nainen_t_hires_100.jpg',
	'img/nc_layer112_100.gif',
	'img/nc_layer112_100.gif',
	'img/nc_layer112_100.gif',
	'img/nc_layer112_100.gif',
	'img/nc_layer112_100.gif',
	'img/nc_layer112_100.gif',
	'img/nc_layer112_100.gif',
	'img/nc_layer112_100.gif'
);

// Images
var mImg = new Array();
mImg['layer112'] = 'img/mies2_suoni1_100.png';		
mImg['layer113'] = 'img/mies_keuhko_korjaus2_100.png';
mImg['layer114'] = 'img/keuhkot3_100.png';	
mImg['layer115'] = 'img/mies2_vatsa1_100.png';
mImg['layer116'] = 'img/sp1_100.png';
mImg['layer117'] = 'img/sperm_c2_100.png';
mImg['layer118'] = 'img/mies_f_closeup3_140.jpg';
mImg['layer119'] = 'img/mc_arm_140.gif';
mImg['layer212'] = 'img/mies2_suoni2_100.png';
mImg['layer213'] = 'img/mies3_keuhkot2_100.png';
mImg['layer214'] = 'img/keuhkot4_100.png';
mImg['layer215'] = 'img/mies2_vatsa2_100.png';
mImg['layer216'] = 'img/sp2_100.png';
mImg['layer217'] = 'img/sperm_c1_100.png';
mImg['layer218'] = 'img/mies_t_closeup3_140.jpg';
mImg['layer219'] = 'img/mc_arm_140.gif';

var nImg = new Array();
nImg['layer112'] = 'img/nainen2_suoni2_100.png';
nImg['layer113'] = 'img/nainen2_keuhkot1_100.png';
nImg['layer114'] = 'img/nainen_keuhko_korjaus_100.png';
nImg['layer115'] = 'img/nainen2_vatsa2_100.png';
nImg['layer116'] = 'img/nainen2_sp2_100.png';
nImg['layer117'] = 'img/sikio1e_100.png';
nImg['layer118'] = 'img/nainen_f_closeup_face_140.jpg';
nImg['layer119'] = 'img/nainen_f_closeup_hand_140.jpg';
nImg['layer212'] = 'img/nainen2_suoni1_100.png';
nImg['layer213'] = 'img/nainen2_keuhkot2_100.png';
nImg['layer214'] = 'img/nainen3_keuhkot4_100.png';
nImg['layer215'] = 'img/nainen2_vatsa1_100.png';
nImg['layer216'] = 'img/nainen2_sp1_100.png';
nImg['layer217'] = 'img/sikio2e_100.png';
nImg['layer218'] = 'img/nainen_closeup_face_140.jpg';
nImg['layer219'] = 'img/nainen_closeup_hand_140.jpg';

var mClear = new Array();
mClear['layer112'] = mClear['layer212'] = 'img/nc_layer115_50.gif';
mClear['layer113'] = mClear['layer213'] = 'img/nc_layer115_50.gif';
mClear['layer114'] = mClear['layer214'] = 'img/nc_layer115_50.gif';
mClear['layer115'] = mClear['layer215'] = 'img/nc_layer115_50.gif';
mClear['layer116'] = mClear['layer216'] = 'img/nc_layer115_50.gif';
mClear['layer117'] = mClear['layer217'] = 'img/nc_layer115_50.gif';
mClear['layer118'] = mClear['layer218'] = 'img/nc_layer115_50.gif';
mClear['layer119'] = mClear['layer219'] = 'img/nc_layer115_50.gif';

var nClear = mClear;

/* CUSTOM.JS */

var screenW = $(window).width();
var screenH = $(window).height();
var zoom;
var tmpZoom;
var tmpY;
var startY;
var minZoom;
var maxZoom = 1.0;
var minVisible = 50;
var show_all = false;
var position;
var win_width;
var pct;
var top;
var zp = 0;
var pointer_drag = false;
var xPos = 0;
var xPosFull = 0;
var point_y;
var showArray = new Array();
var clearArray = new Array();
var loaded = 0;
var loadedIDs = new Array();
var loadedBody = 0;
var closeup = false;
var chosenLayers = new Array();
var zMin;
var zMax;
var zInt;
var xMin;
var xMax;
var xInt;
var yMin;
var yMax;
var yInt;
var zoomDelay;
var yPos = 0;				// current y position (zoom level 1.0)
var yPosFull;				// destination y position (zoom level 1.0)
var sliderPos = false;
var focusing = false;
var showOrgan;
var intervalID3;
var lang;
var langName;
var sexName;

// Non-tobacco layers
var fLayers = $('div#freshHolder img');

// Tobacco layers
var tLayers = $('div#tuhkaHolder img');

// Body layers
var body = $('img.body');
var bodyWide = '#layer100,#layer200';
var bodyHires = '#layer101,#layer201';

// Logo
var logo_fi = 'img/logo2_fi.png';
var logo_se = 'img/logo2_se.png';
var logo_en = 'img/logo2_en.png';

// Selectors
var all = $("div.all");
var sled = $('div#sled');
var gHolder = $("div#gradientHolder");
var tHolder = $("div#tuhkaHolder");
var imgLayers = $('img.imgLayer');
var organs = $('img.organ');
var closeUps = $('img.closeup');
var layer100 = $('img#layer100');
var slider = $("img#slider");
var zoomPointer = $("img.zoomPointer");

$(document).ready(function(){

	// Language
	lang = $('html').attr('xml:lang');
	
	/** Event tracking data **/
	
	// Event tracking - language
	switch(lang){
		case 'en':
			langName = 'English';
			break;
		case 'se':
			langName = 'Swedish';
			break;
		case 'fi':
			langName = 'Finnish';
			break;
		default:
			langName = 'Other';
	}
	
	// Event tracking - sex
	switch(sex){
		case 'm':
			sexName = 'Male';
			break;
		case 'n':
			sexName = 'Female';
			break;
		default:
			langName = 'Other';
	}
	
	// Event tracking - actions
	var actions = new Array();
	actions[1] = 'Face';
	actions[2] = 'Acne';
	actions[3] = 'Wrinkles';
	actions[4] = '-';
	actions[5] = 'Breath odor';
	actions[6] = 'Mouth';
	actions[7] = 'Hair';
	actions[8] = 'Facial hair';
	actions[9] = 'Stress';
	actions[10] = 'Arm hairs';
	actions[11] = 'Nails';
	actions[12] = 'Lungs';
	actions[13] = 'Lung cancer';
	actions[14] = 'Weight gain';
	actions[15] = 'Stomach';
	actions[16] = 'Blood vessels';
	actions[17] = 'Pregnancy';
	actions[18] = 'Genitalia';
	actions[19] = 'Face';
	actions[20] = 'Acne';
	actions[21] = 'Wrinkles';
	actions[22] = '-';
	actions[23] = 'Breath odor';
	actions[24] = 'Mouth';
	actions[25] = 'Hair';
	actions[26] = 'Stress';
	actions[27] = 'Nails';
	actions[28] = 'Lungs';
	actions[29] = 'Lung cancer';
	actions[30] = 'Stomach';
	actions[31] = 'Blood vessels';
	actions[32] = 'Genitalia';
	actions[33] = 'Sperm';
	
	/** Image assignment **/

	// Assign initial images
	var imgArray = new Array();
	if(sex=='m'){
		imgArray = mInit;
	}else if(sex=='n'){
		imgArray = nInit;
	}
	
	var i = 0;
	// Src assignment needed - image onload event in IE
	imgLayers.each(function(){
		$(layers[i]).attr('src', imgArray[i]).imagesLoaded(init);
		i++;
	});
	
	// Reset loadedIDs
	organs.each(function(){
		loadedIDs[this.id] = false;
	});

	// Onload for organs
	organs.load(function(){
		loadedIDs[this.id] = true;
		if(loadedIDs[chosenLayers[0]] && loadedIDs[chosenLayers[1]]){
			$('#'+chosenLayers[0]+',#'+chosenLayers[1]).fadeIn(2000);
		}
	});
	
	/** Navi **/
	
	$('#naviTop ul li a').click(function(e){
		e.preventDefault();
		// Highlight
		$('#naviTop ul li a').removeClass('sel');
		$('#'+this.id).addClass('sel');
		// Focus to organ
		focus(this.id);
	});
	
	/** Sled **/
	
	// Sled drag
	sled.draggable({
		axis: 'y',
		stop: limitDrag
	});

	sled.bind( "dragstart", function(event, ui) {
		sled.css('cursor', "url('cursor/closed_hand.cur'),default");
	});

	sled.bind( "drag", function(event, ui) {
		var pos_top = ui.position.top;
		if(pos_top < 0){
			var abs_pos = Math.abs(pos_top);
			//Drag down
			gHolder.css('top', abs_pos+'px');
			tHolder.css('top', abs_pos+'px');
			$(tLayers).css('margin-top', '-'+abs_pos+'px');
			
		}else if(pos_top > 0){
			//Drag up
			gHolder.css('top', '-'+pos_top+'px');
			tHolder.css('top', '-'+pos_top+'px');
			$(tLayers).css('margin-top', pos_top+'px');
		}
	});
	
	sled.bind( "dragstop", function(event, ui) {
		sled.css('cursor', 'default');
	});
	
	/** Zoom **/
	
	// Zoom - Sled doubleclick
	sled.dblclick(function(){
		setZoom(zoom+0.1);
		centerImg();
	});

	// Zoom - Buttons
	$('#zoomPlus').click(function(e){
		e.preventDefault();
		pointer_drag = false;
		/*setZoom(zoom+0.1);
		centerImg();*/
		mouseZoom(zoom+0.1);
		limitZoom();
	});
	
	$('#zoomMinus').click(function(e){
		e.preventDefault();
		pointer_drag = false;
		mouseZoom(zoom-0.1);
		limitZoom();
	}); 
	
	/** Touch **/
	
	// Touch actions
	slider.get(0).ontouchmove = sliderMove;
	zoomPointer.get(0).ontouchstart = pointerStart;
	zoomPointer.get(0).ontouchmove = pointerMove;
	all.get(0).ontouchstart = allStart;
	all.get(0).ontouchmove = allMove;
	all.get(0).ontouchend = allEnd;

	// Touch gestures
	all.get(0).ongesturestart = gestureStart;
	all.get(0).ongesturechange = gestureChange;
	all.get(0).ongestureend = gestureEnd;
	
	/** Slider **/
	
	// Slider drag
	slider.draggable({ axis: "x",containment: "window" });

	// Move tobacco holder with slider
	slider.bind( "drag", function(event, ui) {
		tHolder.css("width", ui.position.left+"px");
	});

	// Leave tobacco holder to slider end point
	slider.bind( "dragstop", function(event, ui) {
		position = slider.position().left;
		win_width = $(window).width();
		pct = 100*(position/win_width);
		slider.css('left', pct + '%');
		tHolder.css('width', pct + '%');
	});
	
	// Click on title - Move slider
	$(document).on("click", "div#infoTop h2", function(){ 
		slider.animate({left: '71%'}, 880, 'swing');	
		tHolder.animate({width: '71%'}, 880, 'swing');	
	}); 
	
	$(document).on("click", "div#infoBottom h2", function(){ 
		slider.animate({left: '29%'}, 880, 'swing');
		tHolder.animate({width: '29%'}, 880, 'swing');	
	});
	
	/** Zoom slider **/
	
	zoomPointer.draggable({ axis: "y", containment: "parent" });
	
	// Switch cursor
	zoomPointer.bind( "dragstart", function(event, ui) {
		zoomPointer.css('cursor', "url('cursor/closed_hand.cur'),default");
	});
	
	// Drag zoom pointer
	zoomPointer.bind( "drag", function(event, ui) {
		pointer_drag = true;
		var pct = 1-(ui.position.top/101);		// 0-1
		zp = minZoom+(pct*(maxZoom-minZoom));	
		mouseZoom(zp);
		limitZoom();
	});
	
	// Switch cursor
	zoomPointer.bind( "dragstop", function(event, ui) {
		zoomPointer.css('cursor', "url('cursor/open_hand.cur'),default");
	});
	
	/** Frontpage navi **/

	$('#introLeft').click(function(){
		window.location = 'data/n_'+lang+'.html';
	});
	
	$('#introRight').click(function(){
		window.location = 'data/m_'+lang+'.html';
	});
	
	// Switch language / front page
	$('.flag_front').click(function(){
		lang = $(this).attr('id');
		
		// Assign to page languge
		$('html').attr('xml:lang', lang);
		
		// Switch to new language
		if($('.logo').attr('id') != 'logo_'+lang){
			 document.title = $('#title_'+lang).html();
			$('.logo').attr('id', 'logo_'+lang);
			//$('#introHolder p').html($('#infotext_'+lang).html());
			$('#introHolder p.intro_text').html($('#infotext_'+lang).html());
			$('#introHolder p.movie_text').html($('#movie_text_'+lang).html());			
			$('#introHolder p.share_text').html($('#share_text_'+lang).html());
			 $('.youtube-player').attr('src', 'http://www.youtube.com/embed/'+$('#youtube_id_'+lang).html());
		}
	});
	
	/** Loaders **/
	
	// Check loader
	function checkLoader(){
		if((sex=='n' && loaded>19) || (sex=='m' && loaded>19)){
			$('#loader:visible').fadeOut();
			// Remove initial loader
			window.clearInterval(intervalID);
			// Loader two
			chosenLayers[0] = chosenLayers[1] = false;
		}else{
			$('#loader:hidden').show();
		}
	}
	
	// Timer - loader
	var intervalID = window.setInterval(checkLoader, 700);
	
});

// Resize window
$(window).resize(function(){
	if($(window).width()>470){
		yPos = 0;
		screenW = $(window).width();
		screenH = $(window).height();
		fitToScreen();
		centerImg();
	}
});

// Mousewheel to zoom
$(document).mousewheel(function(event, delta, deltaX, deltaY){
	pointer_drag = false;
	mouseZoom(zoom+(delta*0.01));
	limitZoom();
});

function mouseZoom(azLevel){
	// Max zoom level
	if(closeup){
		if (azLevel>1.4) azLevel=1.4;
	}else{
		if (azLevel>1.0) azLevel=1.0;
	}
	
	// When zooming out
	if(azLevel<zoom){
		yPos = 0.9965*yPos;
		xPos = 0.9965*xPos;
		
		// Reset yPos (close to zero)
		if(azLevel<0.15){
			yPos = 0.9*yPos;
			xPos = 0.9*xPos;
		}
	}

	if (azLevel<minZoom) azLevel = minZoom;
	zoom=azLevel;
	
	imgLayers.each(function(){
		
			// 15%
			if($(this).attr('src').indexOf('_15') != -1){
				var aRatio = 0.15;
			// 50%
			}else if($(this).attr('src').indexOf('_50') != -1){
				var aRatio = 1;
			// 65%
			}else if($(this).attr('src').indexOf('_65') != -1){
				var aRatio = 0.65;
			// 140%
			}else if($(this).attr('src').indexOf('_140') != -1){
				var aRatio = 1.4;
			// 100%
			}else{
				var aRatio = 1;
			}
			
			// Dimensions
			var newWidth = Math.round($(this).data('origWidth')*zoom*(1/aRatio));
			var newHeight = Math.round($(this).data('origHeight')*zoom*(1/aRatio));
			
			// Margins
			var x = Math.round((screenW - newWidth)/2);
			var y = Math.round((screenH - newHeight)/2);
			x += ($(this).data('origLeftMarg')-xPos)*zoom;
			y += ($(this).data('origTopMarg')+yPos)*zoom;

			$(this).css('width',newWidth);
			$(this).css('height', newHeight);
			$(this).css('left', x);
			$(this).css('top', y);
	});
	
	// Zoomer
	if(!pointer_drag){
		updateZoomer();
	}
}

function limitZoom(){
	var imgY = parseInt(layer100.css('top'));
	var sledY = parseInt(sled.css('top'));
	var imgH = layer100.height();

	imgY += sledY;

	// Over from top
	if (imgY > 0){
		verticalMove(-imgY);
	}
	
	// Over from bottom
	if (imgY+imgH < screenH){
		var over = screenH-(imgY+imgH);
		verticalMove(over);
	}
}

// Initialize image
function init(){
	if($(this).hasClass('init')){
		$(this).data('origLeftMarg', parseInt($(this).css('margin-left')));
		$(this).data('origTopMarg', parseInt($(this).css('margin-top')));
		$(this).css('margin-left', '0');
		$(this).css('margin-top', '0');
		$(this).data('origWidth', $(this).width());
		$(this).data('origHeight', $(this).height());
		$(this).removeClass('init');
		
		if($(this).hasClass('organ')){
			$(this).css('display', 'block');
			$(this).css('opacity', 100);
		}
		
		loaded++;
		if((sex=='n' && loaded>19) || (sex=='m' && loaded>19)){
			setZoom(0.15);		// set css width/height
			fitToScreen();		// css width or height ratio layer100 -> new setzoom
			centerImg();		// css position left+top -> position to center
			$(bodyWide).show();
			$(bodyHires).show();
		}
	}
}

function animateZoom(azLevel,azVertical,azHorizontal){
	var azSpeed = 2900;
	if (azLevel<minZoom) azLevel = minZoom;
	zoom=azLevel;
	
	imgLayers.each(function(){
		
			// 15%
			if($(this).attr('src').indexOf('_15') != -1){
				var aRatio = 0.15;
			// 50%
			}else if($(this).attr('src').indexOf('_50') != -1){
				var aRatio = 1;
			// 65%
			}else if($(this).attr('src').indexOf('_65') != -1){
				var aRatio = 0.65;
			// 140%
			}else if($(this).attr('src').indexOf('_140') != -1){
				var aRatio = 1.4;
			// 100%
			}else{
				var aRatio = 1;
			}
			
			// Dimensions
			var newWidth = Math.round($(this).data('origWidth')*zoom*(1/aRatio));
			var newHeight = Math.round($(this).data('origHeight')*zoom*(1/aRatio));
			
			// Margins
			var x = Math.round((screenW - newWidth)/2);
			var y = Math.round((screenH - newHeight)/2);
			x += ($(this).data('origLeftMarg')-azHorizontal)*zoom;
			y += ($(this).data('origTopMarg')+azVertical)*zoom;
			
			$(this).animate({
				width: newWidth,
				height: newHeight,
				left: x,
				top: y,
				marginTop: 0
			}, azSpeed, 'swing', function(){
				//moveSlider(sliderPos);
				focusing = false;
				xPos = azHorizontal;
				yPos = azVertical;
			});
	});
	
	// Reset drag/limitzoom positioning
	sled.animate({
		top: 0
	}, azSpeed, 'swing', function(){
		// Fade in text
		if(showOrgan == 'clear'){
			$('div#infoBottom,div#infoTop').delay(300).fadeIn(2050);
		}else{
			$('div#infoBottom,div#infoTop').delay(300).fadeIn(2350);
		}
	});
	
	gHolder.animate({
		top: 0
	}, azSpeed, 'swing');
	
	if(sliderPos){
		slider.animate({
		    left: sliderPos+'%'
		  }, azSpeed, 'swing');
		tHolder.animate({
			top: 0,
		    	width: sliderPos+'%'
		  }, azSpeed, 'swing');
	}else{
		tHolder.animate({
			top: 0
		}, azSpeed, 'swing');
	}
	
	// Zoomer
	if(!pointer_drag){
		updateZoomer(azSpeed);
	}
}

function stillZoom(azLevel,azVertical,azHorizontal){
	var azSpeed = 2900;
	
	if (azLevel<minZoom) azLevel = minZoom;
	zoom=azLevel;
	
	imgLayers.each(function(){
		
			// 15%
			if($(this).attr('src').indexOf('_15') != -1){
				var aRatio = 0.15;
			// 50%
			}else if($(this).attr('src').indexOf('_50') != -1){
				var aRatio = 1;
			// 65%
			}else if($(this).attr('src').indexOf('_65') != -1){
				var aRatio = 0.65;
			// 140%
			}else if($(this).attr('src').indexOf('_140') != -1){
				var aRatio = 1.4;
			// 100%
			}else{
				var aRatio = 1;
			}
			
			// Dimensions
			var newWidth = Math.round($(this).data('origWidth')*zoom*(1/aRatio));
			var newHeight = Math.round($(this).data('origHeight')*zoom*(1/aRatio));
			
			// Margins
			var x = Math.round((screenW - newWidth)/2);
			var y = Math.round((screenH - newHeight)/2);
			x += ($(this).data('origLeftMarg')-azHorizontal)*zoom;
			y += ($(this).data('origTopMarg')+azVertical)*zoom;
			
			$(this).css('width', newWidth);
			$(this).css('height', newHeight);
			$(this).css('left', x);
			$(this).css('top', y);
			$(this).css('margin-top', 0);

			focusing = false;
			xPos = azHorizontal;
			yPos = azVertical;

	});

	// Reset drag/limitzoom positioning
	sled.css('top', 0);

	sled.animate({
		top: 0
	}, 100, 'swing', function(){
		// Fade in text
		if(showOrgan == 'clear'){
			$('div#infoBottom,div#infoTop').delay(300).fadeIn(2050);
		}else{
			$('div#infoBottom,div#infoTop').delay(300).fadeIn(2350);
		}
	});
	
	gHolder.css('top', 0);
	sled.css('top', 0);
	sled.css('top', 0);
	
	if(sliderPos){
		slider.animate({
		    left: sliderPos+'%'
		  }, azSpeed, 'swing');
		tHolder.animate({
			top: 0,
		    	width: sliderPos+'%'
		  }, azSpeed, 'swing');
	}else{
		tHolder.animate({
			top: 0
		}, azSpeed, 'swing');
	}
}

function updateZoomer(speed){
	var uzScale = (zoom-minZoom)/(maxZoom-minZoom);		// zoom scale
	var zoomerPx = Math.floor((1-uzScale)*101);			// css scale: 0-101px
	
	if(!speed){
		zoomPointer.css('top', zoomerPx+'px');
	}else{
		zoomPointer.animate({
			top: zoomerPx
		}, speed, 'swing');
	}
}

function verticalMove(azVertical){
	imgLayers.each(function(){
		$(this).css('top', "+="+azVertical);
	});
}

// Position slider
function moveSlider(x){
	if(x){
		slider.css('left',sliderPos+'%');
		tHolder.css('width',sliderPos+'%');
	}
}

// Focus on organ
function focus(i){
	var sledY = parseInt(sled.css('top'));
	var imgY = parseInt(layer100.css('top'));
	var imgH = layer100.height();

	var b = 0;
	area_focus = false;
	focusing = true;
	
	// Fade out text
	var focused = $('img.focus').length;
	
	$('div#infoTop,div#infoBottom,img.focus').fadeOut(250, function(){

		if(++b == (2+focused)){
			
			// Switch text
			$('div#infoTop').html($('#'+i+'a').html());
			$('div#infoBottom').html($('#'+i+'b').html());

			// Remove class from previous organ
			organs.removeClass('focus');
			
			// Fade organ layers out
			var j = 0;
			//organs.fadeOut(550, function(){
			organs.fadeOut(150, function(){
				
				if(sex == 'm'){
					var border = 14;
				}else{
					var border = 16;
				}
				if (++j == border) {

					// Default values
					showOrgan = 'clear';
					var zoomLevel = 0.6;
					xPosFull = 0;
					var clear = false;
					sliderPos = false;
					maxZoom = 1.0;

					// Nainen
					if(i == 1 || i == 8){
						yPosFull = 1780;
						zoomLevel = 1.0;
					}
					
					if(i == 2){
						sliderPos = 62;
						showOrgan = 118;
						//yPosFull = 1980;
						yPosFull = 1410;
						zoomLevel = 1.4;
						closeup = true;
					}
					
					if(i == 3){
						showOrgan = 118;
						yPosFull = 1715;
						zoomLevel = 1.4;
						closeup = true;
					}
					
					if(i == 4){
						showOrgan = 118;
						yPosFull = 2230;
						zoomLevel = 1.4;
						closeup = true;
					}
					
					if(i == 5){
						yPosFull = 1360;
						zoomLevel = 1.0;
					}
					
					if(i == 6){
						showOrgan = 118;
						yPosFull = 1470;
						zoomLevel = 1.4;
						closeup = true;
					}
					
					if(i == 7){
						showOrgan = 118;
						yPosFull = 2080;
						zoomLevel = 1.4;
						closeup = true;
					}
					
					if(i == 8){
						showOrgan = 118;
						yPosFull = 1680;
						zoomLevel = 1.4;
						closeup = true;
					}

					if(i == 9){
						zoomLevel = 0.1;
						yPosFull = 0;
					}
					
					if(i == 10){
						showOrgan = 119;
						zoomLevel = 1.4;
						closeup = true;
						yPosFull = -50;
						xPosFull = 490;
					}
					
					if(i == 11){
						showOrgan = 119;
						zoomLevel = 1.4;
						closeup = true;
						yPosFull = -550;
						xPosFull = 490;
					}
				
					if(i == 12){
						showOrgan = 113;
						yPosFull = 1010;	
						zoomLevel = 0.8;
					}
					
					if(i == 13){
						showOrgan = 114;	
						yPosFull = 1010;	
						zoomLevel = 0.8;
					}
					
					if(i == 14){
						zoomLevel = 0.6;
						yPosFull = 150;	
					}

					if(i == 15){
						showOrgan = 115;
						zoomLevel = 1.0;
						yPosFull = 625;	
					}
					
					if(i == 16){
						showOrgan = 112;
						//sliderPos = 57;
						zoomLevel = 1.0;
						yPosFull = 1450;
						
					}
					
					if(i == 17){
						showOrgan = 117;
						zoomLevel = 1.0;
						yPosFull = 161;
					}
					
					if(i == 18){
						showOrgan = 116;
						zoomLevel = 1.0;
						yPosFull = -240;
					}

					// Mies
					if(i == 19){
						showOrgan = 118;
						yPosFull = 2200;
						zoomLevel = 1.0;
					}	
					
					if(i == 20){
						showOrgan = 118;
						yPosFull = 1790;
						zoomLevel = 1.4;
						closeup = true;
					}
					
					if(i == 21){
						showOrgan = 118;
						yPosFull = 2180;
						zoomLevel = 1.4;
						closeup = true;
					}	
					
					if(i == 22){;
						showOrgan = 118;
						yPosFull = 1998;
						zoomLevel = 1.0;
					}
					
					if(i == 23){
						showOrgan = 118;
						yPosFull = 1880;
						zoomLevel = 1.4;
						closeup = true;
					}	
					
					if(i == 24){
						showOrgan = 118;
						yPosFull = 1880;
						zoomLevel = 1.4;
						closeup = true;
					}
					
					if(i == 25){
						showOrgan = 118;
						yPosFull = 2590;
						zoomLevel = 1.4;
						closeup = true;
					}

					if(i == 26){
						zoomLevel = 0.1;
						yPosFull = 0;
					}
					
					if(i == 27){
						showOrgan = 119;
						zoomLevel = 1.0;
						yPosFull = -330;
						xPosFull = 600;
					}
				
					if(i == 28){
						showOrgan = 114;
						zoomLevel = 0.8;
						yPosFull = 1400;
					}
					
					if(i == 29){
						showOrgan = 113;
						zoomLevel = 0.8;
						yPosFull = 1400;
					}

					if(i == 30){
						showOrgan = 115;
						zoomLevel = 1.0;
						yPosFull = 874;
					}
					
					if(i == 31){
						showOrgan = 112;
						zoomLevel = 1.0;
						yPosFull = 1700;
					}
					
					if(i == 32){
						showOrgan = 116;
						zoomLevel = 1.0;
						yPosFull = -227;
					}
					
					if(i == 33){
						showOrgan = 117;
						zoomLevel = 1.0;
						yPosFull = -180;
					}
					
					if(closeup){
						maxZoom = 1.4;
					}

					switchLayer(showOrgan);
					pointer_drag = false;

					// Start and destination zoom levels
					zMin = Math.round(zoom*10)/10;
					zMax = zoomLevel;

					// Start and destination x coordinates
					xMin = xPos;
					xMax = xPosFull;
	
					// Start and destination y coordinates
					yMin = yPos;
					yMax = yPosFull;
					
					// Animate zoom
					if(zMin!=zMax || xMin!=xMax || yMin!=yMax){
						animateZoom(zMax,yMax,xMax);
					}else{
						stillZoom(zMax,yMax,xMax);
					}

					// Add white line
					if(!$('div#naviTop2').hasClass('border')){
						$('div#naviTop2').addClass('border');
					}
				}
			});
		}
	});
}

// Switch layer
function switchLayer(x){

	// Image and clear image arrays according to sex
	if(sex == 'm'){
		showArray = mImg;
		clearArray = mClear;
	}else{
		showArray = nImg;
		clearArray = nClear;
	}	
	
	// If no image layer
	if(x == 'clear'){
		for(c=112;c<120;c++){
			// Clear layers
			$('#layer'+c+',#layer'+(c+100)).attr('src',clearArray['layer'+c]);
		}
		return false;
	}
	
	// Organ layers reset
	organs.each(function(){
		loadedIDs[this.id] = false;
	});

	chosenLayers[0] = 'layer'+x;
	chosenLayers[1] = 'layer'+(x+100);

	// Run through layers
	for(c=112;c<120;c++){
		// If selected
		if(x == c){
			// Assing image (will fade in per onload function)
			$('#layer'+c).attr('src',showArray['layer'+c]).addClass('focus');
			$('#layer'+(c+100)).attr('src',showArray['layer'+(c+100)]).addClass('focus');
		}else{
			$('#layer'+c+',#layer'+(c+100)).attr('src',clearArray['layer'+c]);
		}
	}
}

// Set zoom
var zm;
var update = 0;
function setZoom(z){
	
	// Max zoom level
	if(!closeup){
		if (z>1.0) z=1.0;
	}else{
		if (z>1.4) z=1.4;
	}
	
	// Zoomed out from closeup
	if(z<1.0){
		// Hide closeups - rounding
		if ($('#layer118').is(':visible')){
			closeUps.filter(':visible').hide();
		}
	}else{
		// Show closeups
		if ($('#layer118').is(':hidden')){
			closeUps.filter(':hidden').show();
		}
	}

	if (z<minZoom) z = minZoom;
	zoom=z;

	// Scale by zoom level and resolution
	imgLayers.each(function(){
		// 15%
		if($(this).attr('src').indexOf('_15') != -1){
			$(this).css('width', Math.round($(this).data('origWidth')*z*(1/0.15))+'px');
			$(this).css('height', Math.round($(this).data('origHeight')*z*(1/0.15))+'px');
		// 50%
		}else if($(this).attr('src').indexOf('_50') != -1){
			$(this).css('width', Math.round($(this).data('origWidth')*z*(1/1))+'px');
			$(this).css('height', Math.round($(this).data('origHeight')*z*(1/1))+'px');
		// 65%
		}else if($(this).attr('src').indexOf('_65') != -1){
			$(this).css('width', Math.round($(this).data('origWidth')*z*(1/0.65))+'px');
			$(this).css('height', Math.round($(this).data('origHeight')*z*(1/0.65))+'px');
		// 140%
		}else if($(this).attr('src').indexOf('_140') != -1){
			$(this).css('width', Math.round($(this).data('origWidth')*z*(1/1.4))+'px');
			$(this).css('height', Math.round($(this).data('origHeight')*z*(1/1.4))+'px');
		// 100%
		}else{
			$(this).css('width', Math.round($(this).data('origWidth')*z)+'px');
			$(this).css('height', Math.round($(this).data('origHeight')*z)+'px');
		}
	});
	
	// Zoomer
	if(!pointer_drag){
		updateZoomer();
	}
}

// Positions image to the center (css left/top)
function centerImg(){
	imgLayers.each(function(){
	
		var x = Math.round((screenW - $(this).width())/2);
		var y = Math.round((screenH - $(this).height())/2);
		
		// Add margins (so that cropped layers are positioned correctly)
		x += ($(this).data('origLeftMarg')-xPos)*zoom;
		y += ($(this).data('origTopMarg'))*zoom;

		$(this).css('left', x+'px');
		$(this).css('top', y+'px');
	});
}

// Set zoom level for image visibility
function fitToScreen(){
	if (screenW > 0 && screenH > 0 && layer100.data('origWidth') > 0 && layer100.data('origHeight') > 0){
		z = Math.min(screenW/(layer100.data('origWidth')-1200), screenH/layer100.data('origHeight'));		// width or height ratio
		setZoom(z*(0.15));  // Set zoom level accordingly	(15% resolution on layer100)
		minZoom = z*0.15;
	}
}

// Return sled to where image is visible
var xi = 0;
function limitDrag(noAnimation){
	
	if (typeof(noAnimation) == 'object') noAnimation = false;
	if (!noAnimation) noAnimation = false;
	
	var sledY = parseInt(sled.css('top'));
	var imgY = parseInt(layer100.css('top'));
	var imgH = layer100.height();

	// Make sure layer100 is on screen 
	// Zoom
	if (noAnimation){

		// Zoomed over from top
		if (sledY+imgY > 0){
			sled.css({top: -imgY});
				// Compensate for dark layers
				$(tLayers).css('margin-top',Math.abs(imgY)+'px');
				gHolder.css('margin-top',imgY+'px');	
				tHolder.css('margin-top',imgY+'px');	
		}

		// Zoomed over from bottom
		if (sledY+imgY+imgH < screenH){
			sled.css({top: imgY});
				// Compensate for dark layers
				$(tLayers).css('margin-top',imgY+'px');
				gHolder.css('margin-top',Math.abs(imgY)+'px');	
				tHolder.css('margin-top',Math.abs(imgY)+'px');	
		}

	// Drag
	}else{ 
	
		var adjustSpeed = 290;
	
		// Dragged over from top
		if (sledY+imgY > 0){
			// Compensate for dark layers
			if(imgY < 0){
				var l2 = Math.abs(imgY);
			}else{
				var l2 = -imgY;
			}
			tHolder.css('top', imgY+'px');
			$(tLayers).css('margin-top', l2+'px');
			sled.stop().clearQueue().animate({top: -imgY}, adjustSpeed);
			gHolder.animate({top: imgY}, adjustSpeed);
		}
		
		// Dragged over from bottom
		if (sledY+imgY+imgH < screenH){
			var amount = screenH-(sledY+imgY+imgH);
			sled.stop().clearQueue().animate({top: "+="+amount}, adjustSpeed);
			gHolder.animate({top: "-="+amount}, adjustSpeed);
			tHolder.animate({top: "-="+amount}, adjustSpeed);
			$(tLayers).animate({marginTop: "+="+amount}, adjustSpeed);
		}
	}
}

function sliderMove(event) {
	var finger = event.touches[0] ;
	InitX = finger.pageX;		
	$(this).css('left',InitX+'px');
	tHolder.css('width',InitX+'px');	 
};

function pointerStart(event) {

};

function pointerMove(event) {
	pointer_drag = false;
	var finger = event.touches[0];
	point_y = finger.pageY-60;	
	zp = 1.1-(point_y/100);
	setZoom(zp);
	centerImg();
};

function pointerEnd(event) {

};

function switchImage(){
	$(this).attr('src','img/slider3-50.png');
	$(this).removeClass('sliderStart');		
};

var InGesture = null;
var InDrag = null;
var finger = null;
var startY = null;
var startTop = null;
var moveY = null;
var moveTop = null;
var gesturePos = null;

function allStart(event){
	if (InGesture) return;

	if(zoom>0.15){
		InDrag = true;
		finger = event.touches[0];
		startY = finger.pageY;
		startTop = sled.css('top');
	}
}

function allMove(event) {
	if (InGesture) return;
	
	if(zoom>0.15){
		InDrag = true;
		finger = event.touches[0];
		moveY = finger.pageY;
	
		if(startTop == 'auto'){
			moveTop = moveY-startY;
		}else{
			moveTop = parseInt(startTop)+(moveY-startY);
		}
		sled.css('top', moveTop+'px');
		
		if(moveTop < 0){
			// Drag down
			gHolder.css('margin-top', Math.abs(moveTop)+'px');
			tHolder.css('margin-top', Math.abs(moveTop)+'px');
			$(tLayers).css('margin-top', '-'+Math.abs(moveTop)+'px');		
		}else if(moveTop > 0){
			// Drag up
			gHolder.css('margin-top', '-'+moveTop+'px');
			tHolder.css('margin-top', '-'+moveTop+'px');
			$(tLayers).css('margin-top', moveTop+'px');		
		}
	}
};

function allEnd (event) {
	InDrag = false;
	limitDrag();
};

// Gestures
function blockMove(event) {
	// Tell Safari not to move the window.
	event.preventDefault() ;
}

function gestureStart(e){
	InGesture = true;
	tmpZoom = zoom;
}

function gestureChange(e){
	InGesture = true;
	
	//scale the image
	setZoom(tmpZoom*e.scale);
	centerImg();
}

function gestureEnd(e){
	InGesture = false;
}

/* DESKTOP.JS */

// Slider reminder
var inReminder = false;
function sliderReminder(){
	if(!inReminder){
		inReminder = true;
		var rSpeed = 370;
		slider
			.animate({width: '48px', marginLeft: '-24px', top: '40.1%', opacity: 0.6}, rSpeed)
			.animate({width: '50px', marginLeft: '-25px', top: '40%', opacity: 1.0}, rSpeed)
			.delay(70)
			.animate({width: '48px', marginLeft: '-24px', top: '40.1%', opacity: 0.6}, rSpeed)
			.animate({width: '50px', marginLeft: '-25px', top: '40%', opacity: 1.0}, rSpeed)
			.delay(1000)
			.animate({width: '48px', marginLeft: '-24px', top: '40.1%', opacity: 0.6}, rSpeed)
			.animate({width: '50px', marginLeft: '-25px', top: '40%', opacity: 1.0}, rSpeed)
			.delay(70)
			.animate({width: '48px', marginLeft: '-24px', top: '40.1%', opacity: 0.6}, rSpeed)
			.animate({width: '50px', marginLeft: '-25px', top: '40%', opacity: 1.0}, rSpeed,function() {
				// Animation complete.
				inReminder = false;
				window.clearInterval(intervalID3);
				intervalID3 = window.setInterval(sliderReminder, 8000);	// Reminder in 8 sec
			});
	}
}

$(document).ready(function(){
	// Reset checkMove on mousemove
	$("html").mousemove(function(event) {
		if(inReminder){
			// Reset
			slider.stop().clearQueue();
			slider.css({'width' : '50px', 'margin-left' : '-25px', 'top' : '40%', 'opacity' : '1.0'});
			inReminder = false;
		}
		window.clearInterval(intervalID3);
		intervalID3 = window.setInterval(sliderReminder, 8000);
	});

	// Reminder in 8 sec
	intervalID3 = window.setInterval(sliderReminder, 8000);
});