const EventEmitter = require("events");

// Create an EventEmitter instance
const emitter = new EventEmitter();

// Event handler 1: This will log a message when the 'greeting' event is emitted
emitter.on("greeting", (msg) => {
  console.log(`Greeting event received with message: ${msg}`);
});

// Event handler 2: This will log a message when the 'timer' event is emitted
emitter.on("timer", (msg) => {
  console.log(`Timer event received: ${msg}`);
});

// Event handler 3: This will emit a different event from inside another event handler
emitter.on("custom", (msg) => {
  console.log(`Custom event received: ${msg}`);
  // Trigger the 'timer' event from inside the 'custom' event handler
  emitter.emit("timer", "Triggered by custom event!");
});

// Emit the 'greeting' event once
emitter.emit("greeting", "Hello, world!");

// Trigger events using setInterval
setInterval(() => {
  emitter.emit("timer", "Hi there! This is a periodic message.");
}, 2000); // Emitting the 'timer' event every 2 seconds

// Emit the 'custom' event after 3 seconds, which will trigger the 'timer' event
setTimeout(() => {
  emitter.emit("custom", "This is a custom event.");
}, 3000);

console.log("Event emitters are set up!");
