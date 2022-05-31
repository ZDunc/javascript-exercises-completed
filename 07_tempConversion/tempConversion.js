const ftoc = function(int) {
  int = (int - 32)*(5/9);
  int = Math.round(int * 10) / 10;
  return int;
};

const ctof = function(int) {
  int = (int * (9/5)) + 32;
  int = Math.round(int * 10) / 10;
  return int;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
