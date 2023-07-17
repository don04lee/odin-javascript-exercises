const sumAll = function(start, end) {
  let total = 0;
  if(typeof start == "number" && typeof end == "number" && start > 0 && end > 0) {
    let lower = start < end ? start : end;
    let higher = start >= end ? start : end;
    for(let i = lower; i <= higher; i++) {
      total += i;
    }
    return total;
  }
  else {
    return 'ERROR';
  }
};
// Do not edit below this line
module.exports = sumAll;
