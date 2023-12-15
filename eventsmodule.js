const EventEmitter = require("events");

const emmiter = new EventEmitter();

// register a listener
emmiter.on("messageLogged", (arg) => {
  console.log("listener called", arg);
});

// Raise event
emmiter.emit("messageLogged");

// passing event arguments
emmiter.emit("messageLogged", { id: 1, url: "http://mwas.io" });

emmiter.on("logging", (arg) => {
  console.log("listener called... ", arg);
});

const message = "Hi, Mwas🚀";
emmiter.emit("logging", { data: message });
