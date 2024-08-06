console.log("Hello Node");

console.log(process.argv);

var [, , num] = process.argv;

const double = (num) => num * 2;
console.log(double(num));
