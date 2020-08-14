// computes nicely formatted duration from given minutes
(function(i){ 

	var d = Math.floor(i / (24 * 60));
	var h = Math.floor((i / 60) - (24 * d));
	var m = Math.round(i - 60 * (24 * d + h));
	var result = '';

	// days
	if (d > 0) { 
		result = result + d;
		if (d == 1) {
			result = d + " Tag";
		} else {
			result = d + " Tage";
		}
	}

	// hours
	if (h > 0) {
		if (result != '') {
			result = result + ', ';
		}
		result = result + h;
		if (h == 1) {
			result = result + ' Stunde';
		} else {
			result = result + ' Stunden';
		}
	}
	
	// minutes
	if (m > 0) {
		if (result != '') {
			result = result + ', ';
		}
		result = result + m;
		if (m == 1) {
			result = result + ' Minute';
		} else {
			result = result + ' Minuten';
		}
	}

	return result;
})(input)