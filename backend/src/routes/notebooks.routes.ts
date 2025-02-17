import express from "express";
import { sample_notebook } from "src/sample/data";

const notebookRouter = express.Router();

// Get all notebooks
notebookRouter.get("/", async(_req, res) => {
  try {
    res.status(200).send(sample_notebook);
  } catch (error) {
    res.status(500).send(error instanceof Error ? error.message : "Unknown error");
  }
});

// Get by search term
notebookRouter.get("/search/:searchTerm", async(_req, res) => {
  try {
    const searchTerm = _req.params.searchTerm;
    const notebooks = sample_notebook.filter(notebook => notebook.title.toLowerCase().includes(searchTerm.toLowerCase()));
    res.status(200).send(notebooks);
  } catch (error) {
    res.status(500).send(error instanceof Error ? error.message : "Unknown error");
  }
});

// Get by notebook id
notebookRouter.get("/id/:notebookId", async(_req, res) => {
  try {
    const notebookId = _req.params.notebookId;
    const notebook = sample_notebook.find(notebook => notebook.id == notebookId);
    res.status(200).send(notebook);
  } catch (error) {
    res.status(500).send(error instanceof Error ? error.message : "Unknown error");
  }
});

export default notebookRouter;