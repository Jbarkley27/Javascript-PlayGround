//Importing file module
const fs = require('fs');

//writing to a file
fs.writeFileSync('hello.txt', 'Hello from Node.js');


//Javascript Refresher

//declare var
let img = 5;
var img2 = 6;
const imgConst = 9; // Can't change

//functions

function say(message) {
    console.log(message);
}

//Arrow functions
const say2 = (message, message2) => {
    return (message + message2);
}

console.log(say2('Hi', ", Nigga"));

// object
let car = {
    Type: "Ford",
    Make: "Taurus"
}