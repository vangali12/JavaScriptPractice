function randomChance(numberOfQuarters) {
	for (var i = 0; i < numberOfQuarters; i++) {
		var win = Math.trunc(Math.random() * 100);
		var guess = Math.trunc(Math.random() * 100);
		if (win === guess) {
			var coins = (Math.floor(Math.random()*50))+50;
			console.log("You have won", coins, "coins. Congratulations!");
		}
		else {
			console.log("Sorry, you have lost.");
		}
	}
}

randomChance(150);