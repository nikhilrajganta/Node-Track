const fs = require("fs");

const quote = `"stay hungry, stay foolish"`;

fs.writeFile("fs-created.js", quote, () => {
  console.log("completed writing");
});
