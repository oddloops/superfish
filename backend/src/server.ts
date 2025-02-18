import express, { Express, Request, Response } from "express";
import cors from "cors";
import mongoConnection from "./config/database.config";
import apiRouter from "./routes/api";

mongoConnection();
// ***** Express App ***** //
const app: Express = express();

// ***** Middleware ***** //
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
  })
);

// ***** API ***** // 
app.get("/", (req: Request, res: Response) => {
  res.send("Server is live!");
});

app.use("/assets", express.static("assets"));
app.use("/api/v0/", apiRouter)

export default app;