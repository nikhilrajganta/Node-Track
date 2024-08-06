const fs = require("fs");
const { text } = require("stream/consumers");

// const quote = `"stay hungry, stay foolish"`;

// fs.writeFile("fs-created.js", quote, () => {
//   console.log("completed writing");
// });

// 1

const quote2 = "Live more, worry less ";

for (var i = 1; i <= 10; i++) {
  fs.writeFile(`./backup/text-${i}.html`, quote2, () => {
    console.log("file created in bacup folder");
  });
}

// 2

var [, , total] = process.argv;

const quote3 = "Live more, worry more ";

for (var i = 1; i <= +total; i++) {
  fs.writeFile(`./test/text-${i}.html`, quote3, () => {
    console.log(`${i} files are careted`);
  });
}
