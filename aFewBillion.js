function aFewBillion(days) {
	var count = 0;
	for (var i = 0; i < days; i++) {
		var gift = Math.pow(2, i);
		count += gift;
	}
	count = count/100;
	console.log(count);
}

aFewBillion(30);