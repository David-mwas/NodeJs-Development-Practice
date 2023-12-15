const EventEmitter = require("events");

const Logger = require("./modules/logger");
const logger = new Logger();

// register a listener
logger.on("messageLogged", (arg) => {
  console.log("listener called... ", arg);
});

// invoking logger method
logger.log("hey logger🚀");
