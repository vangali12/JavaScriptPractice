function numbersOnly(arr) {
	var numbersOnly = [];
	for (var i = 0; i < arr.length; i++) {
		if (typeof (arr[i]) !== "number") {
			continue;
		}
		else {
			numbersOnly.push(arr[i]);
		}
	}
	console.log(numbersOnly);
}

numbersOnly([1, "apple", -3, "orange", 0.5, null]);