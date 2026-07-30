import {EventEmitter} from "events";

const form= new EventEmitter()    
form.on("submit",(uname,passwords)=>{
console.log("form submitted ");
console.log(`user name: ${uname}`);
console.log(`password: ${passwords}`);
});
form.emit("submit","Aditya","1234");