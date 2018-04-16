// Identify if there is a palindrome

function palindrome(str) {
  //convert to lowercase
  var lowerCase = str.toLowerCase();
  // remove special characters
  var noCharacters = lowerCase.replace(/[\W_]/g, "");
  // remove whitespace and save into variable
  var convertedString = noCharacters.replace(/\s/g,"");

  console.log(convertedString);

  // convert it to an array and reverse it
  var array = convertedString.split("");
  var reverseArray = array.reverse();
  // convert it to string and save it into variable
  var reversedString = reverseArray.join("");

  console.log(reversedString);

  if (convertedString === reversedString) {
    return true;
  } else {
    return false;
  }
}
