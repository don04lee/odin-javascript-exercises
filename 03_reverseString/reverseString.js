const reverseString = function(word) {
  let reversed = '';
  let arr = word.split("");
  for(let i = word.length - 1; i >= 0; i--) {
    reversed += arr[i];
  }

  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
