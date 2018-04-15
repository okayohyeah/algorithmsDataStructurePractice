// Compare the Triplets


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

function solve(a0, a1, a2, b0, b1, b2) {
/*
 * Complete the solve function below.
 */
  var alice = 0;
  var bob = 0;
    
  //if (!a0 || !b0 || !a1 || !b1 || !a2 || !b2) {
   // throw "A rating is missing";
  //}; 
    
  if(a0 > b0) {
    alice += 1;
  } else if (b0 > a0) {
    bob +=1;
  };
    
  if(a1 > b1) {
    alice += 1
  } else if (b1 > a1) {
    bob +=1;
  };
    
  if(a2 > b2) {
      alice += 1
  } else if (b2 > a2) {
      bob +=1;
  };

  return [alice, bob];
  console.log(alice, bob);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a0A1A2 = readLine().split(' ');

    const a0 = parseInt(a0A1A2[0], 10);

    const a1 = parseInt(a0A1A2[1], 10);

    const a2 = parseInt(a0A1A2[2], 10);

    const b0B1B2 = readLine().split(' ');

    const b0 = parseInt(b0B1B2[0], 10);

    const b1 = parseInt(b0B1B2[1], 10);

    const b2 = parseInt(b0B1B2[2], 10);

    let result = solve(a0, a1, a2, b0, b1, b2);

    ws.write(result.join(" ") + "\n");

    ws.end();
}

