const { db, dbConnect, dbClose } = require("../../utils/db");

// get all users
const getAllUsers = async (req, res) => {
  try {
    await dbConnect();
    const users = await db.collection("users").find({}).toArray();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  } finally {
    await dbClose();
  }
};

// add a user
const addUser = async (req, res) => {
  try {
    await dbConnect();
    await db.collection("users").insertOne(req.body);
    res.status(201).json({ message: "User added successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  } finally {
    await dbClose();
  }
};

module.exports = { getAllUsers, addUser };
