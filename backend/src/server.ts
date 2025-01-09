import express, { Express, Request, Response } from "express";
import cors from "cors";

import { sample_notebook } from "./sample/data";

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

app.get("/api/notebooks", (req, res) => {
  res.send(sample_notebook);
})

app.get("/api/notebooks/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const notebooks = sample_notebook.filter(notebook => notebook.title.toLowerCase().includes(searchTerm.toLowerCase()));
  res.send(notebooks);
});

app.get("/api/notebooks/id/:notebookId", (req, res) => {
  const notebookId = req.params.notebookId;
  const notebook = sample_notebook.find(notebook => notebook.id == notebookId);
  res.send(notebook);
})

export default app;