import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";

const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Serve website files from the backend folder
app.use(express.static(dirname));

app.listen(5555, () => {
  console.log("Server is running at http://localhost:5555");
});
