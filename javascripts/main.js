console.log("main.js");

let resistanceLocation = "D'Qar";

let getLocation = document.getElementById("checkLocation");

getLocation.addEventListener("click", () => {
	console.log("Hey Darth, we are located at: ", resistanceLocation);
});


let objButton = document.getElementById("checkObject");
objButton.addEventListener("click", introduceStarwars);

function introduceStarwars(event) {
	console.log("Starwars IIFE", Starwars);
}

let darkButton = document.getElementById("getDarkPlayers");
darkButton.addEventListener("click", getDarkPlayers);

function getDarkPlayers(event) {
	Starwars.getEvil();
}

let locationBtnD = document.getElementById("btn-getLocationD");
locationBtnD.addEventListener("click", () => {
	Starwars.getLocation(locationBtnD.getAttribute("whoIsIt"));
});

let locationBtnL = document.getElementById("btn-getLocationL");
locationBtnL.addEventListener("click", () => {
	Starwars.getLocation(locationBtnL.getAttribute("whoIsIt"));
});


let addPlayer = document.getElementById("btn-signUp");
addPlayer.addEventListener("click", () => {
	let newPlayerName = document.getElementById("newPerson").value;
	let whichSelected;
	var radios = document.getElementsByName("whichSide");
	for(let i = 0; i < radios.length; i++){
		//1 = good, 2 = evil, 0 = jedi
		if (radios[i].checked){
			whichSelected = radios[i].value;
			break;
		}
	}
	console.log("whichSelected", whichSelected);

	if (whichSelected == 0) {
		Starwars.addJedi(newPlayerName);
	} else if (whichSelected == 1){
		Starwars.addKeyPlayer(newPlayerName);
	}else if(whichSelected == 2){
		Starwars.addEvil(newPlayerName);
	}
});