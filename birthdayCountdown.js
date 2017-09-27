function birthdayCountdown(daysUntilMyBirthday) {
	for (var i = daysUntilMyBirthday; i >= 0; i--) {
		if (i > 30) {
			console.log(String(i), "days until my birthday. Such a long time... :(");
		}
		else if (i <= 30 && i > 5) {
			console.log(String(i), "days until my birthday!");
		}
		else if (i <= 5 && i > 0) {
			console.log(String(i), "DAYS UNTIL MY BIRTHDAY!!!");
		}
		else {
			console.log("*•.¸¸¸.•*¨¨*•.¸¸¸.•*•¸.•*¨¨*•.¸¸¸.•*••*");
			console.log("░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░");
			console.log("*•*•.¸¸¸.•*¨¨*•.¸¸¸.•*•¸.•*¨¨*•.¸¸¸.•*••");
		}
	}
}

birthdayCountdown(60);