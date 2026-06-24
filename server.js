const express = require("express");
const bcrypt = require("bcrypt");
const session = require("express-session");

const app = express();
app.use(express.json());

// Session setup
app.use(
  session({
    secret: "securekey",
    resave: false,
    saveUninitialized: false,
  })
);

// In-memory user storage (for demo)
let users = [];

// Register
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("All fields required");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ username, password: hashedPassword });

  res.send("User registered successfully");
});

// Login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(400).send("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).send("Invalid credentials");
  }

  req.session.user = username;
  res.send("Login successful");
});

// Protected route
app.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    return res.status(401).send("Unauthorized");
  }
  res.send(`Welcome ${req.session.user}`);
});

// Logout
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("Logged out successfully");
});

app.listen(3000, () => console.log("Server running on port 3000"));