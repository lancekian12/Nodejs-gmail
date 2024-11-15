const express = require("express");
const app = express();
const port = 3000;
const myRoutes = require("./routes/myRoute");

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the routes defined in myRoutes
app.use("/api", myRoutes);

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
