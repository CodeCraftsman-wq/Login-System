const express=require("express");
const bodyParser=require("body-parser");
const path=require("path");

const connectDB=require("./db");
const User = require("./models/User");



const app=express();
const PORT=3000;

connectDB();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"public")));

// Dummy user data
const user={
    username:"admin",
    password:"12345"
};

app.get("/", (req, res) => {
  res.send("<h2>Server is running properly ✅</h2>");
});


//Route Login POST
// Login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // ✅ Using User here
  const user = await User.findOne({ username, password });
  if (user) {
    res.send("<h2>✅ Login Successful!</h2>");
  } else {
    res.send("<h3>❌ Invalid username or password!</h3>");
  }
});

// Register route
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password }); // ✅ Using User
  await newUser.save();
  res.send("<h2>✅ User Registered Successfully!</h2>");
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


