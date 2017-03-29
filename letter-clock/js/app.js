function _el(element) {
	return document.getElementById(element);
}
function updateClock() {
	var time = new Date();
	var hours = time.getHours() % 12;
	var minutes = time.getMinutes();

	var hourIndicator = '';
	var minutesIndicator = '';
	var additionalFiveIndicator = false;
	var toOrPast = '';

	// To or Passed
	if ( minutes >= 35 && minutes < 60) {
		toOrPast = 'to';
	} else if (minutes >= 0 && minutes < 5) {
		toOrPast = 'oclock';
	}
	else {
		toOrPast = 'past';
	}

	// Getting hour
	switch (hours) {
		case 0 :
			hourIndicator = (toOrPast == 'to') ? 'one' :'twelve';
			break;

		case 1 :
			hourIndicator = (toOrPast == 'to') ? 'two' : 'one';
			break;

		case 2 :
			hourIndicator = (toOrPast == 'to') ? 'three' : 'two';
			break;

		case 3 :
			hourIndicator = (toOrPast == 'to') ? 'four' : 'three';
			break;

		case 4 :
			hourIndicator = (toOrPast == 'to') ? 'five-h' : 'four';
			break;

		case 5 :
			hourIndicator = (toOrPast == 'to') ? 'six' : 'five-h';
			break;

		case 6 :
			hourIndicator = (toOrPast == 'to') ? 'seven' : 'six';
			break;

		case 7 :
			hourIndicator = (toOrPast == 'to') ? 'eight' : 'seven';
			break;

		case 8 :
			hourIndicator = (toOrPast == 'to') ? 'nine' : 'eight';
			break;

		case 9 :
			hourIndicator = (toOrPast == 'to') ? 'ten-h' :'nine';
			break;

		case 10 :
			hourIndicator = (toOrPast == 'to') ? 'eleven' :'ten-h';
			break;

		case 11 :
			hourIndicator = (toOrPast == 'to') ? 'twelve' : 'eleven';
			break;

		default:
			console.log('Some error occured');
			break;
	}
	// Defaults
	var spans = document.getElementsByTagName('span');

	for (i = 0; i < spans.length; i++) {
		spans[i].classList.remove('focus');
	}

	_el('it').className = "focus";
	_el('is').className = "focus";

	// Getting minutes
	if ((minutes >= 5 && minutes < 10) || (minutes >= 55)) {
		minutesIndicator = 'five';
	} else if ((minutes >= 10 && minutes < 15) || (minutes < 55 && minutes >= 50)) {
		minutesIndicator = 'ten';
	} else if ((minutes >= 15 && minutes < 20) || (minutes < 50 && minutes >= 45)){
		minutesIndicator = 'quarter';
	} else if ((minutes >= 20 && minutes < 25) || (minutes < 45 && minutes >= 40)) {
		minutesIndicator = 'twenty';
	} else if ((minutes >= 25 && minutes < 30) || (minutes < 40 && minutes >= 35)) {
		minutesIndicator = 'twenty';
		additionalFiveIndicator = true;
	} else if ((minutes >= 30 && minutes < 35)) {
		minutesIndicator = 'half';
	} else {
		minutesIndicator = false;
	}
	
	// Show hours
	_el(hourIndicator).className ="focus";

	if (minutesIndicator != false) {
		_el(minutesIndicator).className ="focus";
	}
	
	_el(toOrPast).className ="focus";

	if ( additionalFiveIndicator ) {
		_el('five').className ="focus";
	}
	if ( minutesIndicator !== 'half' && minutesIndicator !== 'quarter' && toOrPast !== 'oclock') {
		_el('minutes').className ="focus";
	}
}
updateClock();
setInterval(updateClock, 1000);