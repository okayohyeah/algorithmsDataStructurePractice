// PLUS MINUS
// Given an array of integers, calculate the fractions of its elements that are:
    // positive, negative, and are zeros. 
// Print the decimal value of each fraction on a new line


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the plusMinus function below.
 */
function plusMinus(arr) {
    /*
     * Write your code here.
     */
  var positives = 0;
  var negatives = 0;
  var zeros = 0;
  var posFraction = 0;
  var negFraction = 0;
  var zeroFraction = 0;
  
  for (var i = 0; i<arr.length; i++) {
    if (arr[i] > 0) { // find positives
      positives++; 
    } else if (arr[i] < 0) { // find negatives
      negatives++;
    } else if (arr[i] == 0) {
      zeros++;
    }
  }
  
  
  posFraction = (positives/arr.length).toFixed(6);
  negFraction = (negatives/arr.length).toFixed(6);
  zeroFraction = (zeros/arr.length).toFixed(6);
  
  console.log(posFraction);
  console.log(negFraction);
  console.log(zeroFraction);


}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}