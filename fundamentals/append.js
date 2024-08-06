const fs = require("fs");

quoteData = "Nikhil";
data1 = "good morning";

fs.appendFile("fun.html", "\n" + quoteData, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Appended File");
  }
});

fs.readFile("fun.html", "utf-8", (err, beforedata) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile("fun.html", quoteData + "\n" + beforedata, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("written");
      }
    });
  }
});
