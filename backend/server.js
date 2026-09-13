const http = require("http");

const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const port = process.env.PORT;

console.log(port);

const server = http.createServer((req, res) => {
  res.end("Hello from the server");
});

server.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
