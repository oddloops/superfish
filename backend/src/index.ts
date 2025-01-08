import server from './server';
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});