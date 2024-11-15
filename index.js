const express = require("express");
const cors = require("cors"); // Import cors package
const app = express();
const port = 3000;
const myRoutes = require("./routes/myRoute");

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the routes defined in myRoutes
app.use("/api", myRoutes);

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Catch-all for undefined routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
