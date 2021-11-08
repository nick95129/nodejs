const EventEmitter = require('events');


const customEmitter  = new EventEmitter();

customEmitter.on('response', (name, id)=> {
    console.log(`Data received: ${name} with id: ${id}`);
});

customEmitter.on("response", () => {
    console.log(`some other logic here`)
})
customEmitter.emit('response', 'john', 23);