const os = require("os");

console.log(os.freemem() / 1024 / 1024 / 1024);

console.log(os.totalmem() / 1024 / 1024 / 1024);

const freeMemory = (free) => `${(free / 1024 ** 3).toFixed(2)} GB`;

console.log(freeMemory(os.freemem()));

function getData() {
  const free = (os.freemem() / 1024 ** 3).toFixed(2) + " GB";
  const total = (os.totalmem() / 1024 ** 3).toFixed(2) + " GB";
  const percent = ((os.freemem() / os.totalmem()) * 100).toFixed(2) + "%";

  return {
    free,
    total,
    percent,
  };
}

console.log(getData().free);
console.log(getData().total);
console.log(getData().percent);

console.log(os.version());

console.log(os.cpus());
