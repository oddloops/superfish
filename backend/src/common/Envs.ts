import dotenv from "dotenv";

dotenv.config();

const Envs = {
  "JWT_SECRET": process.env.JWT_SECRET as string,
  "PORT": process.env.PORT,
  "ATLAS_URI": process.env.ATLAS_URI,
  "DB_NAME": process.env.DB_NAME
}

export default Envs;