// 1.   Have a var with the array of bands,
//  actually this can be a dictionary with the band as key and the song as value maybe? check
// 2.  Retrieve a random band from the array and have it placed as the "word" to guess in underscores. check
// 3. Need to get the element of the letters guessed using the .key events check
// 4. Determine if the word was correct or not 
// 5. Depending on the result display the letter in the word above or subtract it from the remaining guesses
// and put it in the letters already guessed list
// 6. Not take into account previous typed letters, meaning that it won't subtract the remaining guesses
// 7. Modify the number of wins
// 8. Display the win result bye reproducing a song by the band and display the name of song and artist

//Let's have a basic array first and then explore the dictionary part with the song titles
var bands = ["Charon", "Sentenced", "HIM", "Children of Bodom", "Nightwish", "Opeth", "In Flames", 
"The 69 Eyes", "Dark Tranquillity", "Amaranthe", "Sonic Syndicate", "Scar Symmetry", "Poets of the Fall",
 "Amon Amarth", "Apocalyptica", "Arch Enemy", "Tristania", "The Rasmus", "Entwine", "Deathstars",
 ]

//This will define the variables and get a random band from the array
var targetBands = document.getElementById("band-insert")
var chosenBand = bands[Math.floor(Math.random()* bands.length)]
var bandName = []
for (i = 0; i < chosenBand.length; i++ ){
	bandName.push("_");
}

//usar indexOf

console.log(chosenBand);
console.log(bandName);



for (var i = 0; i < chosenBand.length; i++){
	console.log(chosenBand[i] + " " + i)
}

// for (var i = 0; i < bandName.length; i++){
// 	console.log(bandName[i] + " " + i)
// }

 //This gets the letter the user types and trigger the game
 document.onkeyup = function(event) {
	 var corrects = []
	 var wrongs = []
	 var userKey = event.key.toLowerCase()
	 var chosenLower = chosenBand.toLowerCase()
	 var letterToPush = []
	 var guessesLeft = 13


	 console.log("Typed letter: " + event.key)
	for (var i = 0; i < chosenBand.length; i++){
		if (userKey === chosenLower[i]){
			corrects.push(i)
			letterToPush.push(chosenBand[i])
			console.log("You guessed right, the letter you typed is in position " + i)
			console.log(letterToPush)
			bandName.splice(i,1, chosenBand[i])

		} else {
			wrongs.push(userKey)
			console.log("Wrong guess! at index: " + i)
			console.log(wrongs)
			}
		console.log(bandName)
		 }
		 targetBands.textContent = bandName.join(" ")

 }


