//This route handles editing/deleting items, renders edit page

const express = require('express');
const router = express.Router();
const editController = require('../controllers/edit');
const authController = require("../controllers/auth");

router.get('/remove/:id', editController.deleteTicket);
router.get('/:id', editController.updateTicket);

module.exports = router