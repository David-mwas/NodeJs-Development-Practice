const EventEmitter = require("events");

let url = "http://mwas.io";

// inherit emmiter object to logger class
class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    // Raise event
    this.emit("messageLogged", { id: 1, url });
  }
}

module.exports = Logger;
