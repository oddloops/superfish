import express, { Express, Request, Response } from "express";
import cors from "cors";

// ***** Express App ***** //
const app: Express = express();

// ***** Middleware ***** //
app.use(cors());

// ***** API ***** // 
app.get("/", (req: Request, res: Response) => {
  res.send("Server is live!");
});

export default app;