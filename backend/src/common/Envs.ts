import dotenv from "dotenv";

dotenv.config();

const Envs = {
  "JWT_SECRET": process.env.JWT_SECRET as string,
  "PORT": process.env.PORT
}

export default Envs;