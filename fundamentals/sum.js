var [, , a, b] = process.argv;

const sum = (a, b) => a + b;

console.log(sum(+a, +b));

console.log(+process.argv[2] + +process.argv[3]);

console.log(process.argv);
