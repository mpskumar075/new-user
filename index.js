import express from 'express';
import dotenv from  'dotenv';
import cors from 'cors';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
dotenv.config();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())
app.use('/', Routes);




const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = 8000 || process.env.PORT;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

app.listen(PORT, () => console.log(`server is runing on ${PORT}`))