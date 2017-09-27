function fancyArray(arr) {
	for (var i = 0; i < arr.length; i++) {
		console.log(String(i), "->", arr[i]);
	}
}

fancyArray(["James", "Jill", "Jack"]);