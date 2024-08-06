const fs = require("fs");

fs.unlink("./unlink-test.html", (err) => {
  console.log("deleted");
});

fs.readdir("./backup", (err, files) => {
  console.log(files);
});
