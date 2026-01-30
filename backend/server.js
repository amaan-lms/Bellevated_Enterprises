const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors({
  origin: ["http://localhost:5174", "https://bellevated-enterprises-azure.vercel.app"],
  credentials: true
}));

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));



// Routes----------
//login and signup
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

//request quotes
const quoteRoutes = require("./routes/quoteRoutes");
app.use("/api/quotes", quoteRoutes);

//contact form
const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contacts", contactRoutes);

//driver applications
const driverRoutes = require("./routes/driverRoutes");
app.use("/api/drivers", driverRoutes);




//admin routes
const adminRoutes = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
