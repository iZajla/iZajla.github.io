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
	function resetReminder(){
		if(inReminder){
			// Reset
			slider.stop().clearQueue();
			slider.css({'width' : '50px', 'margin-left' : '-25px', 'top' : '40%', 'opacity' : '1.0'});
			inReminder = false;
		}
		window.clearInterval(intervalID3);
		intervalID3 = window.setInterval(sliderReminder, 8000);
	}

	// Reset sliderReminder on mousemove
	$("html").mousemove(function(event) {
		 resetReminder();
	});
	
	// Reset sliderReminder on click
	$(document).click(function(event) {
		resetReminder();
	});
	
	$(document).mousewheel(function(){
		resetReminder();
	});

	// Reminder in 8 sec
	intervalID3 = window.setInterval(sliderReminder, 8000);
});