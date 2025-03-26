const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
// Serves static files (like index.html, CSS, JS) from the "public" folder.
app.use(express.static(path.resolve("./public")));
// Creates a new WebSocket server using Socket.io and attaches it to server.
const io = new Server(server);

//Socket io
// Listens for a new client connection.

// Logs socket ID when a user connects.
// Listens for "user-send-message" event from the client.

// Logs the received message.

// Broadcasts the message to all connected clients (io.emit("message", message)).


io.on("connection", (socket) => {
  console.log("user connected", socket.id);
  socket.on("user-send-message", (message) => {
    console.log("New Message is :", message);
    io.emit("message", message);
  });
});

app.get("/", (req, res) => {
  return res.sendfile("/public/index.html");
});

server.listen(8100, () => console.log("Server Start"));
