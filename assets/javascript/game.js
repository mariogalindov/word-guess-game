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
var bandName = ""
for (i = 0; i < chosenBand.length; i++ ){
	var bandName = bandName + " " +  "_";
}

//usar indexOf

console.log(chosenBand);
console.log(bandName);
console.log(chosenBand.length);
console.log(bandName.length);

targetBands.textContent = bandName
for (var i = 0; i < chosenBand.length; i++){
	console.log(chosenBand[i] + chosenBand[i].indexOf(i))
}


 //This gets the letter the user types and trigger the game
 document.onkeyup = function(event) {
	 indices = []
	for (var i = 0; i < chosenBand.length; i++){
		 console.log("Chosen Band i: " + chosenBand[i])
		var indexN = chosenBand.search(event.key)
		console.log("IndexN: " + indexN)
		if (event.key === chosenBand[i]){
			indices.push(i)
			console.log("You guessed right, the letter you typed is in position " + indices)
		} else {
			console.log("Wrong guess!")
			}
		var charIndex = chosenBand.indexOf(event.key)
		console.log("charIndex: " + charIndex)

		 }

		//  alert("You're right" + chosenBand.indexOf(event.key))
		if (chosenBand.includes(event.key)){
	 }
	//  alert("you pressed the " + event.key + " key.")

	//This loop will get a random band from the bands array
	for (var i = 0; i < bands.length; i++){
		// var chosenBand = bands[Math.floor(Math.random()* bands.length)]
	}

 }


