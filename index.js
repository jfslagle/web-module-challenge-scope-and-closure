// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}


// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter one is a closure, counter two is not.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * a- Counter 1 b- The variable "count" is inside the function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * With counter1 you'd You'd want to use counter2 when you'd need your variables in a global scope rather than a local scope.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

// this function only needs to return a random number, so it doesn't need an inner function or multiple levels of scope.

function inning() {
  return Math.floor(Math.random() * 3);
}

console.log(inning());
console.log(inning());
console.log(inning());


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numInnings){
  let home = 0;
  let away = 0;

  for(let i = 1; i <= numInnings; i++){
    home += inning();
    away += inning(); 
  }

  let Obj = { 
    "Home": home,
    "Away": away
  }
  return Obj;
}
const scoreBoard = finalScore(inning, 9);
console.log(finalScore(inning, 9))
console.log(finalScore(inning, 9))
console.log(finalScore(inning, 9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


// function scoreboard(getInningScore,inning,numberOfInnings) {
//   for (i = 0; i <= totallinnings; i++) {
//     console.log(inning);
//   }
//   if (i = 0) {
//     console.log ()
//   }
//   /* CODE HERE */
// }

function scoreboard(getInningScore, inning, num) {
  let score = {};
  let finalScore = getInningScore(0, 0);
  let inningNum = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
  ];
  console.log('Inning: Away Team - Home Team')
  for (i = 0; i < num; i++) {
    score = getInningScore(inning(), inning());
    finalScore["Home"] += score["Home"];
    finalScore["Away"] += score["Away"];
    console.log(`${inningNum[i]} inning: ${score["Away"]} - ${score["Home"]}`);
  }
  console.log(`Final Score: ${finalScore["Away"]} - ${finalScore["Home"]}`);
}

function getInningScore(val1, val2) {
  return { Home: val1, Away: val2 };
}

console.log("Task 5:");
scoreboard(getInningScore, inning, 9);
console.log("\n");



