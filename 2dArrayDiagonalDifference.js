// DIAGONAL DIFFERENCE
// 2D ARRAY - square matrix, calculate absolute difference 
// between the sums of its diagonals

'use strict';

const fs = require('fs');

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
 * Complete the diagonalDifference function below.
 */
// a = arrays
function diagonalDifference(a) {
    /*
     * Write your code here.
     */
     var sum1 = 0;
     var sum2 = 0;
     var difference = 0;
     
     for(var i = 0; i < a.length; i++) {
      sum1 += a[i][i]; // get 1st diagonal sum
      sum2 += a[i][(a.length - 1)- i]; // get 2nd diagonal sum
     }
     console.log(sum1);
     console.log(sum2);
  
     // use Math.abs() to take care of negative numbers of the difference of sum1 - sum2
     difference = Math.abs(sum1 - sum2); 
     console.log(difference);
     return difference;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let a = Array(n);

    for (let aRowItr = 0; aRowItr < n; aRowItr++) {
        a[aRowItr] = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    }

    let result = diagonalDifference(a);

    ws.write(result + "\n");

    ws.end();
}