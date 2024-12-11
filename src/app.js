require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const authRoutes = require("./routes/auth");
const speakerRoutes = require("./routes/speaker");
const bookingRoutes = require("./routes/booking");

app.use("/auth", authRoutes);
app.use("/speakers", speakerRoutes);
app.use("/sessions", bookingRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
