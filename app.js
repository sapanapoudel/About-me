'use strict';

//Declare variable and use prompts

//Receiving and using username
var username = prompt('What is your username');
var message = 'My username is: ' + username;
alert(message);
console.log('username: ' + username);

//Fungame 1
var favoriteFood = prompt('Is your favorite food momo');
console.log('favoriteFood: ' +favoriteFood.toLocaleUpperCase());

if (favoriteFood === 'yes' || favoriteFood === 'y'){
  alert('Yes, you got it');
}else if(favoriteFood === 'no'){
  alert('Sorry, try again');
}else {
  alert('let\'s play it\'s fun');
}

//Fungame 2 
var favoriteplace = prompt('Is your favorite place Seattle');
console.log('favoriteplace: '+favoriteplace.toLocaleUpperCase());

if (favoriteplace === 'yes' || favoriteplace === 'y'){
  alert('Yes, you got it');
}else if(favoriteplace === 'no' ) {
  alert('Sorry, try again');
}else{
  alert('let\'s play it\'s fun');
}

//Fungame3
var favoriteHobby = prompt('Is your favorite hobby reading books');
console.log('favoriteHobby: '+favoriteHobby.toLocaleUpperCase());

if (favoriteHobby === 'yes' || favoriteHobby === 'y'){
  alert('Yes, you got it');
}else if(favoriteHobby === 'no' ) {
  alert('Sorry, try again');
}else{
  alert('let\'s play it\'s fun');
}


//fungame4
var favoriteGame = prompt('Is your favorite Game soccor');
console.log('favoriteGame: '+favoriteGame.toLocaleUpperCase());

if (favoriteGame === 'yes' || favoriteGame === 'y'){
  alert('Yes, you got it');
}else if(favoriteGame === 'no'){
  alert('Sorry, try again');
}else{
  alert('let\'s play it\'s fun');
}

//Fungame5
var favoriteSubject= prompt('Is your favorite subject data structure');
console.log('favoriteSubject: '+favoriteSubject.toLocaleUpperCase());

if (favoriteSubject === 'yes' || favoriteSubject === 'y'){
  alert('Yes, you got it');
}else if(favoriteSubject === 'no'){
  alert('Sorry, try again');
}else{
  alert('let\'s play it\'s fun');
}
