import {EventEmitter} from "events";

const button= new EventEmitter();

button.on("click",(uname)=>{
     console.log(`button clicked by ${uname}`);
});     
button.emit("click", "Aditya");
button.emit("click", "Rohit");
button.emit("click", "Yugh");
button.emit("click");