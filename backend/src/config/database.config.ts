import Envs from "@common/Envs";
import { MongoClient } from "mongodb";

const connectionString = Envs.ATLAS_URI|| "";
const client = new MongoClient(connectionString);

async function mongoConnection () {
  try {
    console.log("Connecting to MongoDB...");
    const connection = await client.connect();
    let database = connection.db(Envs.DB_NAME);
    console.log("Successfully connected to MongoDB cluster");
    return database;
  } catch (error) {
    console.error('MongoDB connection error: ' + error);
    return null;
  }
}

export default mongoConnection;