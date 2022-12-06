const EventEmitter  = require('events');

const customEmitter = new EventEmitter();

// First listen for event then we can emit it. 

// .on - listen for events - creating the existence of event
customEmitter.on('response',(name,id)=>{
    console.log(`data received user: ${name} with the id : ${id}`)
})
customEmitter.on('response',()=>{
    console.log(`Some other data`)
})

// .emit - emit an events ,used for displaying the data
customEmitter.emit('response','itachi uchiha',7);