let goodtime = document.getElementById("timeday")
let rest = document.getElementById("rest")
let randomdadj = Math.floor(Math.random() * 18)
let randomclassj = Math.floor(Math.random() * 20)
let randommomj = Math.floor(Math.random() * 13)
let result = document.getElementById("joke")
// dad jokes
let dadj = ["Did you hear about the cat that ate a lemon? Now it's a sour puss"
, "What do you call a happy cowboy? A jolly rancher", 
"What did one wall say to the other? I'll meet you at the corner", 
"What kind of bagel can travel? A plain bagel.", 
"What's the best way to catch a fish? Ask someone to throw it at you", 
"What do you call a cat with eight legs? An octo-puss", 
"What do you call an anxious fly? A jitterbug", 
"How did the piano get locked out of its car? It lost its keys",
"How do you make an eggroll? You push it",
"I've never been a fan of facial hair. But now it's starting to grow on me",
"How do you hire a horse? Put up a ladder.",
"Is there anything worse than when it's raning cats and dogs? Yes, hailing taxis",
"Can February March? No, but April May!",
"Where did you learn to make ice cream? Sundae school",
"if you see a robbery at an Apple store, does that make you an iWitness?",
"Why did Waldo go to therapy? To find himself.", 
"Our vacuum cleaner is getting old. It's just gathering dust",
"Why was the traffic light late to work? it took too long to change",
"Why didn't the sun go to college? It already had a million degrees",
"Getting paid to sleep would be my dream job"]
// classic jokes 
let classicj = ["Why don't scientist trust atoms? Because they make up everything",
"Why don't skeletons fight each other? They don't have guts",
"What do you call fake spaghetti? An impasta",
"Why was the math book sad? Because it had too many problems",
"What did the ocean say to the shore? Nothing it just waved",
"Why do bicycles fall over? Because they are two-tired",
"How do you organize a space party? You planet",
"What do you call cheese that isn't yours? Nacho cheese",
"Why don't programmers like nature? It has too many bugs",
"What do you call a bear with no teeth? A gummy bear",
"What did one hat say to the other? Stay here, I'm going on ahead",
"What's orange and sounds like a parrot? A carrot",
"Why don't eggs tell jokes? Because they'd crack each other up",
"What do you call a factory that makes good products? A satisfactory",
"What kind of shoes do ninjas wear? Sneakers",
"Why was the broom late? It swept in",
"How does the scientist freshen her breath? With experi-mints",
"What do you call an alligator in a vest? An investigator",
"Why did the stadium get hot after the game? All the fans left",
"What do you call a pile of cats? A meowntain",
"How does the lobster answer the phone? Shello"
]
// mom jokes
let momj = [
"Why did the cookie cry? Because its mother was a wafer so long",
"Why did the mother broom sweep the air? Because it wanted to clean the air",
"What did the mother buffalo say when her son left for school? Bison",
"Why did the computer go to it's mom? Because it needed a byte to eat!",
"Why did the mom sit on a neddle? Because she wanted to be a little sharp!",
"How did the baby strawberry cry for help? Mom, I'm in a jam!",
"Why did the mother candle tell her children a bedtime story? To lighten their dream",
"Why did the mom sit on a clock? She wanted to be on time!",
"Why did the mom go to school with a ladder? Because she wanted to go to high school",
"Why did the mom bring a lightbulb? Because it brightened up her day?",
"Why did the mom get a job at the bakery? Because she kneaded dough!",
"Why did the mom take a ruler to bed? To see how long she slept!",
"Why did the mom bring an umbrella to the game? Because her son's team was a strom of talent",
"Why did the mom wear sunglasses at night? Because her kids were so bright!"
]
// getting the time for the DOM
let date = new Date()
 let hour = date.getHours()
if(hour < 12) {
  console.log('good morning')
  goodtime.innerHTML = "Good Morning"
}

else if(hour == 12) {
   goodtime.innerHTML = "Good Noon"
}
 else if (hour > 12 && hour < 16) {
    console.log('good noon')
    goodtime.innerHTML = "Good afternoon"
 }
 //else if(hour = 6) {
  // console.log('good noon')
  // goodtime.innerHTML = "Good Noon"
 //}

 else if(hour > 15) {
    goodtime.innerHTML = "Good Evening"
 }
 function momjokes() {
  result.innerHTML = momj[randommomj]
 }
 function classic() {
  result.innerHTML = classicj[randomclassj]
 }
 function dadjokes () {
  result.innerHTML = dadj[randomdadj]
 }
function erase() {
  result.innerHTML = ""
}
 if(result.innerHTML != "") {
  rest.style.display = "block"
 }
 //else {
 // rest.style.display = "none"
 //}