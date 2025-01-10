import express, { Express, Request, Response } from "express";
import cors from "cors";

import { notebookRouter } from "./routes/notebooks.routes";

// ***** Express App ***** //
const app: Express = express();

// ***** Middleware ***** //
app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
  })
);

// ***** API ***** // 
app.get("/", (req: Request, res: Response) => {
  res.send("Server is live!");
});

app.use("/notebooks", notebookRouter);

export default app;