import express from "express";
import notebookRouter from "./notebooks.routes";
import usersRouter from "./users.routes";

const apiRouter = express.Router()

apiRouter.use("/notebooks", notebookRouter);
apiRouter.use("/users", usersRouter);

export default apiRouter;