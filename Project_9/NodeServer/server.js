// server.js
const http = require("http");
const os = require("os");
const path = require("path");
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on("serverStart", () => {
  console.log("Server has started successfully...");
});

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  if (req.url === "/") {
    res.write("<h2> Welcome to Node.js Custom Server</h2>");
    res.write("<p>Hello Students</p>");
  } 
  else if (req.url === "/os") {

    res.write("<h3>OS Information</h3>");
    res.write(`Platform: ${os.platform()}<br>`);
    res.write(`Architecture: ${os.arch()}<br>`);
    res.write(`Hostname: ${os.hostname()}<br>`);
    res.write(`Free Memory: ${os.freemem()} bytes<br>`);
  } 
  else if (req.url === "/path") {

    const samplePath = "/Users/aarav/Documents/server.js";
    res.write("<h3> Path Module Example</h3>");
    res.write(`Directory: ${path.dirname(samplePath)}<br>`);
    res.write(`Base Name: ${path.basename(samplePath)}<br>`);
    res.write(`Extension: ${path.extname(samplePath)}<br>`);
  } 
  else if (req.url === "/event") {

    myEmitter.emit("customEvent", "Event module executed successfully!");
    res.write("<h3> Event Module Example</h3>");
    res.write("Custom event triggered on the server!");
  } 
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h3> 404 Not Found</h3>");
  }

  res.end();
});

myEmitter.on("customEvent", (msg) => {
  console.log("EVENT LOG:", msg);
});

server.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
  myEmitter.emit("serverStart");
});
