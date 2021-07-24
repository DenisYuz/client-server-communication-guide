"use strict";

const WebSocketServer = require("ws").Server;
const wss = new WebSocketServer({ port: 8081 });

const data = Array.from(Array(100000).keys());

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log(`received: ${message}`);
  });

  ws.on("end", () => {
    console.log("Connection ended...");
  });

  ws.send("Hello Client");

  setInterval(() => {
    ws.send(data.toString());
    console.log(`server sent a message via ws`);
  }, 1000);
});
