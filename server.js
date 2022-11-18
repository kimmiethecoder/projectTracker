const express = require("express");
const app = express();
const PORT = 3100;
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const homeRoutes = require("./routes/home");
const editRoutes = require("./routes/edit");

require('dotenv').config({path: './config/.env'});

// Passport config
require("./config/passport")(passport);

connectDB()

//Middleware
app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));


//Routes
app.use('/', homeRoutes);
app.use('/edit', editRoutes);


//Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));