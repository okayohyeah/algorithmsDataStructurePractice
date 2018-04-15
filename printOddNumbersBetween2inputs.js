process.stdin.resume();
process.stdin.setEncoding('utf-8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});

function oddNumbers(l, r) {
  var outputA = [];
  
  for (var i = l; i <r; i++) {
    //check if odd
    if (i % 2 == 1) {
      outputA.push(i);
    // console.log(outputA);
    } else if(i % 2 == 0) { // check if even
      continue;
    };
  };
  return outputA;
};



var fs = require('fs');
var wstream = fs.createWriteStream(process.env.OUTPUT_PATH);
process.stdin.on('end', function () {
    __input_stdin_array = __input_stdin.split("\n");
    var res;

    var _l = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;
    
    var _r = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;
    
    res = oddNumbers(_l, _r);
    for(var res_i=0; res_i < res.length; res_i++) {
        wstream.write(res[res_i]+"\n");
    }
    
    wstream.end();
});