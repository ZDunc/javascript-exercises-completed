const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let sum = 0;
  for (let int in arr) {
    sum += arr[int];
  }
  return sum;
}

const multiply = function(arr) {
  let product = 1;
  for (let int in arr) {
    product *= arr[int];
  }
  return product;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(number) {
  let result = 1;

  for (let i = 2; i <= number; i++) {
    result = result * i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
