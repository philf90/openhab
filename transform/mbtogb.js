// computes nicely formatted duration from given minutes
(function(i){ 

    var x = i / 1000;
    var x = x.toFixed(2)
    var result = x + ' GB';

	return result;
})(input)