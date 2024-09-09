import { MongoClient, ServerApiVersion } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
export async function RUN_DB() {
  try {
    await client.connect();
  } catch (err) {
    console.log(err);
  }
}

export async function GET_DB() {
  try {
    const db = client.db(process.env.MONGODB_NAME);
    return db;
  } catch (err) {
    console.log(err);
  }
}
