function game() {

	//declare variables
	var initialBet = Number(document.forms["sevens"]["initialBet"].value); //pull in entered val
	var balanceHistory = [initialBet]; //use this array to store history of rolls, initialize to bet
	var maxBalance = 0; //To return max winning
	var numSides = 6; //Change number of sides on die if desired

  //Validate starting bet
	if (initialBet <= 0) {

		alert("Please bet a value greater than zero!");
		document.forms["sevens"]["initialBet"].value = "";

		return false;
	}

  //gameplay loop
	var i = 0;
	for (var curBalance = initialBet; curBalance > 0; i++) {
		//generate two rolls (from Code-Along)
		firstRoll = Math.floor(Math.random() * numSides) + 1;
		secondRoll = Math.floor(Math.random() * numSides) + 1;

		//Win - store in balance history
		if ((firstRoll + secondRoll) == 7) {
			curBalance = curBalance + 4;
			balanceHistory[balanceHistory.length] = curBalance;

		//Loss - store in balance history
		} else {
			curBalance = curBalance - 1;
			balanceHistory[balanceHistory.length] = curBalance;
		}
	}

//Search balance history for highest won
	for (var j = 0; j < (balanceHistory.length - 1); j++) {
		if (balanceHistory[j] > maxBalance) {
			maxBalance = balanceHistory[j];
		}
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("validBet").innerText = ("$" + initialBet.toFixed(2));
	document.getElementById("totalRolls").innerText = i;
	document.getElementById("maxBal").innerText = ("$" + maxBalance.toFixed(2));
	document.getElementById("maxBallRoll").innerText = balanceHistory.indexOf(maxBalance);
	document.getElementById("playButton").innerText = "Play Again!";

	return false;
}
