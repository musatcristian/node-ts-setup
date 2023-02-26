import { MongoClient, ServerApiVersion } from "mongodb";

const mongoURI_default = "mongodb://127.0.0.1:27001";

export const mongoClient = new MongoClient(mongoURI_default, {
  connectTimeoutMS: 5000,
  serverApi: ServerApiVersion.v1,
  keepAlive: true,
});

export const openConnection = async () => {
  try {
    console.log("Connecting to database...");
    await mongoClient.connect();
    console.log("Connected to Local Mongod process");
  } catch (e) {
    console.error("Connection error:", e);
    mongoClient.close();
    console.warn("Exiting...");
    process.exit();
  }
};

export async function listDatabases(client: MongoClient) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

export async function main() {
  try {
    // Connect to the MongoDB cluster
    await mongoClient.connect();

    // Make the appropriate DB calls
    await listDatabases(mongoClient);
  } catch (e) {
    console.error(e);
  } finally {
    await mongoClient.close();
  }
}
