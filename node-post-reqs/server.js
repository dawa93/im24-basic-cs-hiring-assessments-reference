//Fill in vars here
var http = require("http");
var url = require("url");
var fs = require("fs");

const server = http
  .createServer(function(request, response) {
    var path = url.parse(request.url, true).pathname;

    if (request.method === "POST") {
      /*========YOUR CODE HERE=========*/
      fs.readFile(__dirname + "/assets" + path + ".jpg", (err, result) => {
        if (err) {
          throw err;
        } else {
          response.writeHead(200, {
            "Content-Length": Buffer.byteLength(result)
          });
          response.end("ok");
        }
      });
    } else if (request.method === "GET") {
      if (path === "/") {
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile(__dirname + "/index.html", function(err, data) {
          if (err) console.log(err);
          response.end(data);
        });
      }
    } else {
      response.end(404);
    }
  })
  .listen(4568, "127.0.0.1");

console.log("Listening...");

module.exports = server;
