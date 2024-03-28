const express = require("express");
const app = express();
const userRoutes = require("./src/users/routes");
// json middleware
app.use(express.json());
const port = 5000;
// =========================================================

// user routes
app.use("/users", userRoutes);

// Path: index.js
app.get("/", async (req, res) => {
  res.send("Server is running");
});
app.listen(port, (req, res) => {
  console.log(`Server is running on: http://localhost:${port}`);
});
