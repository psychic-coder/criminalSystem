import express from "express";
import helmet from "helmet";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import morgan from "morgan";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/user.routes.js";
import { corsOption } from "./utils/config.js";

dotenv.config({ path: "./.env" });

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017";


connectDB(mongoURI);

const app = express();


app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));



app.get("/", (req, res) => {
  res.send("Hello, World!");
});


app.use("/api/user", userRouter);


app.use(errorMiddleware);


app.listen(port, () => 
  console.log(`Server is working on Port: ${port} in ${envMode} Mode.`)
);
