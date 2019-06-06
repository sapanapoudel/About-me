'use strict';

//Declare variable and use prompts

//Receiving and using username
var username = prompt('What is your username');
var message = 'My username is: ' + username;
alert(message);
console.log('username: ' + username);

var correctAnswer = 0;
//Fungame 1
var favoriteFood = prompt('Is my favorite food spicy');
console.log('favoriteFood: ' +favoriteFood.toLocaleUpperCase()); 

if (favoriteFood === 'no' || favoriteFood === 'n'){
  alert('Yes, i hate spicy food');
  correctAnswer++;
}else if(favoriteFood === 'yes' || favoriteFood === 'y'){
  alert('I prefer sweet');
}else {
  alert('let\'s play it\'s fun');
}

//Fungame 2 
var favoriteplace = prompt('Is your favorite place Seattle');
console.log('favoriteplace: '+favoriteplace.toLocaleUpperCase());

if (favoriteplace === 'yes' || favoriteplace === 'y'){
  alert('Yes, I like rain');
  correctAnswer++;
}else if(favoriteplace === 'no' || favoriteplace === 'n') {
  alert('You better know me better');
}else{
  alert('let\'s play it\'s fun');
}

//Fungame3
var favoriteHobby = prompt('Do I look weired to you?');
console.log('favoriteHobby: '+favoriteHobby.toLocaleUpperCase());

if (favoriteHobby === 'no' || favoriteHobby === 'n'){
  alert('thank you for being polite anyway');
  correctAnswer++;
}else if(favoriteHobby === 'yes' || favoriteHobby === 'y' ) {
  alert('Sorry, can\'t help');
}else{
  alert('let\'s play it\'s fun');
}


//fungame4
var favoriteGame = prompt('Is your favorite Game soccor');
console.log('favoriteGame: '+favoriteGame.toLocaleUpperCase());

if (favoriteGame === 'yes' || favoriteGame === 'y'){
  alert('Yes, you got it');
  correctAnswer++;
}else if(favoriteGame === 'no' || favoriteGame === 'n'){
  alert('you hurt my feelings......');
}else{
  alert('let\'s play it\'s fun');
}

//Fungame5
var favoriteSubject= prompt('Is your favorite subject data structure');
console.log('favoriteSubject: '+favoriteSubject.toLocaleUpperCase());

if (favoriteSubject === 'no' || favoriteSubject === 'n'){
  alert('you got it');
  correctAnswer++;
}else if(favoriteSubject === 'yes' || favoriteSubject === 'y'){
  alert('I thought you know me');
}else{
  alert('let\'s play it\'s fun');
}

//================================================================================================================
//Question 6
//Generating random number 1 through 50
var randomNumber = Math.ceil(Math.random()*50) +1;
console.log('randomNumber: ' + randomNumber);

var guessState = parseInt(prompt('Guess how many state I have visited so far'));
console.log('guessState: ' + guessState);

//label to loop1
loop1: 
//It will enter loop 4 times
for(var i = 0; i < 4; i++){
  if (guessState === randomNumber){
    alert('Hey congratulation! you got it');
    correctAnswer++;
    break loop1;

  }else if(guessState > randomNumber){
    guessState = prompt('Your number is too high, guess again');

  }else if(guessState < randomNumber){
    guessState = prompt('Your number is too low, guess again');

  }else{
    guessState = prompt('Please enter number');
  }
}

//==================================================================================================================
//Question 7

//creating Array called countryVisited which has the list of country
var countryVisited = new Array('UK', 'Maxico', 'Canada', 'Nepal', 'Australia', 'India');
console.log('countryVisited: ' + countryVisited);

var customerChoice= prompt('Which country I have visited?');
console.log('customerChoice: ' + customerChoice);

var attempt = 1;  

//label while loop to loop2
loop2:
//it will loop through 6 attampts
while (attempt < 6){
  //loop through each element in Array
  for (  var index = 0; index < countryVisited.length; index++){
    if(customerChoice=== countryVisited[index]){
      alert('Yhee! you got it');
      correctAnswer++;
      break loop2; //It will break from both for loop and while loop
    }
  }
  customerChoice = prompt('try again');
  attempt++;  
}


//===============================================================================
//Question 8
//Counting correct answers
if (correctAnswer >= 6){
  alert(username +' you did awasome job');
}else{
  alert(username + ' you got '+correctAnswer+' out of 7 correct. Better luck next time');
}
console.log('correctAnswer: ' +correctAnswer);











