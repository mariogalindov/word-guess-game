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

//This generates the variable to push the text to
var bandName = []
//This pushes the underscores based on the length of the word
for (i = 0; i < chosenBand.length; i++ ){
	bandName[i] = ("_");
}

//usar indexOf

console.log(chosenBand);
console.log(bandName);

// for (var i = 0; i < chosenBand.length; i++){
// 	console.log(chosenBand[i] + " " + i)
// }

var corrects = []
var wrongLetters = []
 //This gets the letter the user types and trigger the game
 document.onkeyup = function(event) {

	 var userKey = event.key.toLowerCase()
	 var chosenLower = chosenBand.toLowerCase()
	 var letterToPush = []
	 var guessesLeft = 13

// // Tut lines
// 	console.log(chosenLower.indexOf(userKey))
// 	// if (userKey.indexOf(chosenLower) > -1){
// 	// 	console.log()
// 	// }

	 console.log("Typed letter: " + event.key)


// Ayuda de Jeronimo
	 if (chosenBand.indexOf(userKey) === -1){
		console.log(wrongLetters)
		wrongLetters.push(userKey)
		console.log(wrongLetters)
    }
    else{
        corrects.push(userKey)
        console.log("corrects: " + corrects)
	}
	

	for (var i = 0; i < chosenBand.length; i++){
		if (userKey === chosenLower[i]){
			// corrects.push(1)
			// console.log("corrects: " + corrects)
			// console.log("You guessed right, the letter you typed is in position " + i)
			// console.log("Letter to push: " + letterToPush)
			bandName[i] = userKey
			// bandName.splice(i,1, chosenBand[i]) // este sí funciona aquí

		} else {
			// wrongLetters.push(userKey)
			// console.log("Wrong guess! at index: " + i)
			// console.log("wrongs: " + wrongLetters)

			}
		// console.log(bandName)
		 }
		 targetBands.textContent = bandName.join(" ")

 }


