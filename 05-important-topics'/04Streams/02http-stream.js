const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    // const text = fs.readFileSync('../../0content/big-data.txt','utf-8')
    const fileStream = fs.createReadStream(
      "../../0content/big-data.txt",
      "utf-8"
    );
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => res.end(err));
    // res.end(text);
  }).listen(5000);