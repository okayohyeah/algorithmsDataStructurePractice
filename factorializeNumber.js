// factorial of a non-negative number: denoted by n!, is the product of all positive integers less than or equal to n.

function factorialize(num) {
  var output = 1;
  for (var i = 1; i <= num; i++) {
     output *= i;
  }
  return output;
}