import { readFile, writeFile, appendFile } from "fs/promises";


const readData = async (filename) => {
  try {
    const content = await readFile(filename, "utf-8");
    return content;
  } catch (error) {
    console.log(error.message);

  }
};

const writeData = async (filename, content) => {
  try {
    await writeFile(filename, content);
  } catch (error) {
    console.log(error.message);
    
  }
};

const appendData = async (filename, content) => {
  await appendFile(filename, content);

};

const data = await readData("file1.js");
console.log(data);
