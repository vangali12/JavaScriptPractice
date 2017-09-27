function tellTime(hour, minute, period) {
	if (minute < 30) {
		var str1 = "just after";
		var str2 = String(hour);
	}
	else {
		str1 = "almost";
		str2 = String((hour + 1));
	}
	if (period === "AM") {
		str3 = "in the morning.";
	}
	else {
		str3 = "in the evening.";
	}
	console.log("It's", str1, str2, str3);
}

tellTime(8, 50, "AM"); // expect "It's almost 9 in the morning."
tellTime(7, 15, "PM"); // expect "It's just after 7 in the evening."
tellTime(6, 45, "PM"); // expect "It's almost 7 in the evening."
tellTime(5, 30, "AM");