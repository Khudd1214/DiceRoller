//need a function to generate a random number between 1-6

function d6 () {
	const x = Number(Math.ceil(Math.random() * 6))
	return x;
}
//need a function that will display the proper dice image for the number generated.

function callDiceImage (playerRoll, player) {
	const target = document.getElementsByClassName("imageContainer")[0];
	const newImage = document.createElement("img");
	switch (playerRoll) {
		case 1:
			target.appendChild(newImage);
			document.getElementsByTagName("img")[player].setAttribute("src", "../images/dice1.png");
			break;
		case 2:
			target.appendChild(newImage);
			document.getElementsByTagName("img")[player].setAttribute("src", "../images/dice2.png");
			break;
		case 3:
			target.appendChild(newImage);
			document.getElementsByTagName("img")[player].setAttribute("src", "../images/dice3.png");
			break;
		case 4:
			target.appendChild(newImage);
			document.getElementsByTagName("img")[player].setAttribute("src", "../images/dice4.png");
			break;
		case 5:
			target.appendChild(newImage);
			document.getElementsByTagName("img")[player].setAttribute("src", "../images/dice5.png");
			break;
		case 6:
			target.appendChild(newImage);
			document.getElementsByTagName("img")[player].setAttribute("src", "../images/dice6.png");
	}
}

//need a function to determine a winner
function displayWinner(player1roll, player2roll) {
	//alert(typeof(player1roll));
	//alert(typeof(player2roll));
	if (player1roll > player2roll) {
		let newText = document.createElement("h2");
		document.getElementsByClassName("headerText")[0].appendChild(newText);
		document.getElementsByTagName("h2")[0].textContent = "Player 1 Wins!";
	} else if (player1roll < player2roll) {
		newText = document.createElement("h2");
		document.getElementsByClassName("headerText")[0].appendChild(newText);
		document.getElementsByTagName("h2")[0].textContent = "Player 2 Wins!";
	} else {
		newText = document.createElement("h2");
		document.getElementsByClassName("headerText")[0].appendChild(newText);
		document.getElementsByTagName("h2")[0].textContent = "Draw!";
	}
}

//execute code
let player1roll = d6();
callDiceImage(player1roll, 0);
let player2roll = d6();
callDiceImage(player2roll, 1);
displayWinner(player1roll, player2roll);