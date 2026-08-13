import {writeFile,appendFile} from "fs/promises";
// await writeFile("hello.txt", "JS is easy");
// await writeFile("hello.txt", "good night "); 
await appendFile("hello.txt", " aditya😁 "); 
const constent = await readTextFile("hello.txt","utf-8");
console.log(content);