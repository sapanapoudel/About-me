'use strict';

//Declare variable and use prompts

//Receiving and using username

var username = prompt('What is your username?');
var message = 'My username is: ' + username;
alert(message);
console.log('username: ' + username);

var correctAnswer = 0;
var totalQuestions = 0;

var questions = [
  'Is my favorite food spicy?',
  'Is your favorite place Seattle?',
  'Do I look weired to you?',
  'Is your favorite Game soccor?',
  'Is your favorite subject data structure?',
  'Do I like skateboarding?'
];
var answers = [
  'no',
  'yes',
  'no',
  'yes',
  'no',
  'no'
];

var answers1 = [
  'n',
  'y',
  'n',
  'y',
  'n',
  'n'
];

var guessingGame = function (question, answer, answer1) {
  totalQuestions++;
  var response = prompt(question).toLowerCase();
  console.log('favoriteFood: ' + response);
  //checks correct answer
  if (answer === response || answer1 === response) {
    correctAnswer++;
    alert('You got it!');

  } else {
    //incorect answer:
    alert('Keep trying!');
  }
};
for (let i = 0; i < questions.length; i++) {
  guessingGame(questions[i], answers[i], answers1[i]);
}
//================================================================================================================
//Question 6
//Generating random number 1 through 50
var guessingState = function () {
  totalQuestions++;
  var randomNumber = Math.ceil(Math.random() * 50) + 1;
  console.log('randomNumber: ' + randomNumber);

  var guessState = parseInt(prompt('Guess how many state I have visited so far?'));
  console.log('guessState: ' + guessState + ' is a ' + typeof guessState);

  //It will enter loop 4 times
  for (var i = 0; i < 3; i++) {
    console.log('guessState: ' + guessState + ' is a ' + typeof guessState);

    if (guessState === randomNumber) {
      break;
    } else if (guessState > randomNumber) {
      guessState = prompt('Your number is too high, guess again');
    } else if (guessState < randomNumber) {
      guessState = prompt('Your number is too low, guess again');
    } else {
      guessState = prompt('Please enter number');
    }
    guessState = parseInt(guessState);
  }

  if (guessState === randomNumber) {
    alert('Hey congratulation! you got it');
    correctAnswer++;
  }
  alert('correct answer is: ' + randomNumber);
};
guessingState();

//==================================================================================================================
//Question 7
var guessCountry = function () {
  totalQuestions++;
  //creating Array called countryVisited which has the list of country
  var countryVisited = ['UK', 'Mexico', 'Canada', 'Nepal', 'Australia', 'India'];
  console.log('countryVisited: ' + countryVisited);

  var customerChoice = prompt('Which country I have visited?').toUpperCase();
  console.log('customerChoice: ' + customerChoice);

  var attempt = 1;

  //label while loop to loop2
  loop2: //source: https://stackoverflow.com/questions/183161/whats-the-best-way-to-break-from-nested-loops-in-javascript
  //it will loop through 6 attampts
  while (attempt < 6) {
    //loop through each element in Array
    for (var index = 0; index < countryVisited.length; index++) {
      if (customerChoice === countryVisited[index]) {
        alert('Yhee! you got it');
        correctAnswer++;
        break loop2; //It will break from both for loop and while loop
      }
    }
    customerChoice = prompt('try again');
    attempt++;
  }
};

guessCountry();
//===============================================================================
//Question 8
//Counting correct answers
var countCorrect = function(){
  if (correctAnswer >= 6) {
    alert(username + ' you did awasome job');
  } else {
    alert(username + ' you got ' + correctAnswer + ' out of ' + totalQuestions + ' correct. Better luck next time');
  }
  console.log('correctAnswer: ' + correctAnswer + ' \n total questions: ' + totalQuestions);
};
countCorrect();











