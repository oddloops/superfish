import *  as express from "express";
import { sample_notebook, sample_users } from "src/sample/data";
import generate_token from "src/util/generate-token";

export const usersRouter = express.Router();

// Get all users
usersRouter.get("/", async(_req, res) => {
  try {
    res.status(200).send(sample_users);
  } catch (error) {
    res.status(500).send(error instanceof Error ? error.message : "Unknown error");
  }
});

usersRouter.post("/login", (req, res) => {
  const {email, password} = req.body;
  const user = sample_users.find(user => user.email == email && user.password == password);

  if (user) {
    res.status(200).send(generate_token(user));
  } else {
    res.status(400).send("Username/Password is invalid");
  }
});