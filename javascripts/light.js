console.log("light.js");
						//refers to the dark Starwars
var Starwars = (function(originalStarwars){
	let location = "D'Qar";
	let keyPlayers = ["Chewbacca", "Rey", "Admiral Ackbar", "Han Solo", "Porkins", "Princess Pademae"];
	let Jedi = ["Ben Kenobi", "Yoda", "Luke Skywalker", "Mace Windu", "Anakin Skywalker"];

	originalStarwars.getLocation = function(whoAsks){
		console.log("Who Asks", whoAsks);
		let tell = true;
		let evilPlayers = Starwars.getEvil();
		evilPlayers.forEach(function(item){
			if (item === whoAsks){
				tell = false;
			}
		});
		if (tell){
			console.log(whoAsks, "is on the good side. Location: ", location);
		}else{
			console.log("You are Evil, Tell you I will not.");
		}
	};

	originalStarwars.addJedi = function(who){
		Jedi.push(who);
		console.log("jedi list", Jedi);
	};

	originalStarwars.addKeyPlayer = function(who){
		keyPlayers.push(who);
		console.log("players list", keyPlayers);

	};

	return originalStarwars;

})(Starwars);