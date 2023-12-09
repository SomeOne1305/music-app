import express from "express";
import requestIP from "request-ip";
import router from "./routes/main.js";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
app.use('/static', express.static(path.join(__dirname, 'static')));
const port = process.env.PORT || 8000;

// Middlewares
app.use(express.json());
app.use(requestIP.mw());
app.use(express.urlencoded({ extended: true }));

// custom middleware to restrict POST requests for specific paths that require a token
// app.use((req, res, next) => {
//   if (
//     req.method === "POST" ||
//     req.method === "DELETE" ||
//     req.method === "PUT" ||
//     (req.method === "PATCH" &&
//       (req.path === "/music/:id/likes" || req.path === "/musics/:id/likes" || req.path === "/contact"))
//   ) {
//     const token = req.headers.authorization;
//     if (!token || token !== "my-secret-token") {
//       return res.status(401).json({message:"Unauthorized access",statusCode:401});
//     }
//   }
//   next();
// });
const allowedOrigins = ['http://localhost:3000','http://localhost:3000/']

//Configuration
dotenv.config();
// Routes;
app.use(
  cors({
    origin:function(origin,callback){
      if(!origin || allowedOrigins.includes(origin)){
        callback(null,true)
      }else{
        callback(new Error('Not allowed by CORS'))
        console.log('Not allowed',origin);
      }
    },
    methods:'GET',
    credentials:true
  })
)
app.use("/api/v1/", router);

//Mongodb connection
const run = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB is connected successfully !");
      })
      .catch((err) => {
        console.log("error occurred:", err);
      });
  } catch (err) {
    console.error(err);
  }
};
run();

// App running
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
