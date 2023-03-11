import { Db, MongoClient, ServerApiVersion } from "mongodb";

import { DB_NAME } from "../constants/index.js";

const mongoURI_default = `mongodb://${DB_NAME}:27001`;

export const mongoPool = new MongoClient(mongoURI_default, {
  connectTimeoutMS: 5000,
  serverApi: ServerApiVersion.v1,
  keepAlive: false,
});

export let mainDb: Db;

export const openConnection = async () => {
  try {
    if (!DB_NAME) {
      const err = new Error("Env error");

      throw (err.message = "Database name variable not found");
    }
    console.log("Connecting to database...");
    const connection = await mongoPool.connect();
    mainDb = connection.db();
    console.log("Connected to Local Mongod process");
  } catch (e) {
    console.error("Connection error:", e);
    mongoPool.close();
    console.warn("Exiting...");
    process.exit();
  }
};

export async function listDatabases() {
  const databasesList = await mainDb.admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}
