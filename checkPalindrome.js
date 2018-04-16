// Identify if there is a palindrome

function palindrome(str) {
  //convert to lowercase & remove special characters
  str = str.toLowerCase().replace(/[\W_]/g, "");
  // remove whitespace and save into variable
  str = str.replace(/\s/g,"");

  console.log(str);

  // convert it to an array and reverse it
  var array = str.split("");
  var reversedString = array.reverse().join("");

  console.log(reversedString);

  if (str === reversedString) {
    return true;
  } else {
    return false;
  }
}
