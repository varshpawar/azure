const express = require("express");

const app = express();

// Azure provides PORT environment variable
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Azure App Service Node 20 LTS is Running 🚀");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Azure Node App!" });
});

// IMPORTANT: Listen on 0.0.0.0 for Azure
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
