const repeatString = function(string, num) {
  let repeated = '';
  if(num < 0) {
    return 'ERROR';
  }
  for(let i = num; i > 0; i--) {
    repeated += string;
  }
  return repeated;
};

// Do not edit below this line
module.exports = repeatString;
