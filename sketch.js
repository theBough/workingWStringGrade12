//Global variables
let myInput, myButton, myImage,theirWord,allCaps;
let dictionary = ['a','e','i','o','u']

function listVowels(thisWord){
  let vowelList = ""
  for(let i =0 ;  i< dictionary.length ; i++){
    if(thisWord.indexOf(dictionary[i]) > -1){
      //the vowel is in the word
      vowelList += dictionary[i] + ", "
    }
  }//end loop
  //take off the last two letters of the string
  vowelList = vowelList.substring(0, vowelList.length -2 )
  return vowelList
}
function turnAllCaps(){
  allCaps  = myInput.value().toUpperCase();
}
function getWordLength(thisWord){
  //thisWord has a scope local to this function only.
  //we often use the word 'this' to show it's local
  return thisWord.length
}
function getWord(){//click event of the button.
  theirWord = myInput.value();//get whatever is in the inputBox
  turnAllCaps();
}
// P5JS functions  don't erase ----------------------------
function setup() {
  createCanvas(400, 400);
  theirWord = "";
  myInput = createInput("enter a word")
  myInput.position(20,100)
  myButton = createButton("Click this")
  myButton.position(200,100)
  myButton.mousePressed(getWord)
  myImage = loadImage("Screenshot_2026-04-15_112449-removebg-preview.png")
  allCaps = ""
}
function draw() {
  background(220);
  text("working with strings", 20,50)//title
  text("All Caps: " + allCaps, 20,150)
  text("Length: " + getWordLength(theirWord), 20,175)
  text("All Lower: ", 20,200)
  text("List of vowels: " + listVowels(theirWord), 20,225)
  image(myImage,200, 50)
  
}
