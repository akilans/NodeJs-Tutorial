// Events Example

const events = require("events");
const emitter = new events.EventEmitter();

const sayHello = ()=>{
    console.log("Hello Akilan");
};

const sayHi= ()=>{
    console.log("Hi Akilan");
};

emitter.on("Hello",sayHello);

emitter.on("Hi",sayHi);

emitter.emit("Hi");  // Call functions based on the events

//emitter.emit("Hello");  // Call functions based on the events