require("dotenv").config();
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://eshak-test:KlK2G0IOukgSIgTK@eshak.3xgcckf.mongodb.net/?retryWrites=true&w=majority&appName=eshak";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("admin");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
