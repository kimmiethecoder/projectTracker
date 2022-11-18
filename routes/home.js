//Handles initial GET request for the homepage
//Handles POST method  request for adding a new task

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get('/', homeController.getIndex);
router.get("/profile", ensureAuth, homeController.getProfile);
router.post('/new', homeController.createTicket);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);


module.exports = router