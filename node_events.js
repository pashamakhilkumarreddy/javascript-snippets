const EventEmitter = require("events").EventEmitter;

const eventEmitter = new EventEmitter();

eventEmitter.on("name", (name) => {
  console.info(`Ich Bin ${name}`);
});

console.info(`Max listeners ${eventEmitter.getMaxListeners()}`);

eventEmitter.emit("name", "Gwen Stacy");

eventEmitter.removeListener("name", () => {
  console.info(`Name listener is removed`);
});
