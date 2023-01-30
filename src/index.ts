import express, { Application, Request, Response } from "express";
import "dotenv/config";
import mongodbConnect from "./db";
import userRouter from "./routers/userRouter";

const app: Application = express();
const PORT = process.env.PORT || 8000;

mongodbConnect();

app.use(express.json());
app.use("/users", userRouter);

app.get("/", ( req: Request, res: Response ) => {
    res.status(200).send("Hello");
});

app.listen(PORT, () => {
    console.log("Server is up and running");
});
