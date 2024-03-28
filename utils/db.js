require("dotenv").config();
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.DB_URI);

async function dbConnect() {
  try {
    await client.connect();
  } catch (e) {
    console.error(e);
  }
}
async function dbClose() {
  try {
    await client.close();
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  dbConnect,
  dbClose,
  db: client.db("practice"),
};
