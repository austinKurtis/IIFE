console.log("dark.js");
  //IIFE Oject "Starwars"
var Starwars = (function(){
	let location = "The unknown Regions";
	let keyPlayers = ["Jabba The Hutt", "Count Dooku", "Darth Maul", "General Grievous", "Greedo", "Jango Fett", "Darth Sideous"];

	return {
		getEvil: function() {
			console.log("Evil List of Players", keyPlayers);
			return keyPlayers;
		},
		getDarkLocation:  function() {
			return location;
		},

		addEvil: function(who){
			keyPlayers.push(who);
			console.log("evil players", keyPlayers);
		}

	};



})();