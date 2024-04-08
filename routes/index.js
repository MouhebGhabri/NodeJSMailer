var express = require('express');
var router = express.Router();
const { Send } = require("../controllers/userController");


/* GET home page. */
router.post("/confirm", Send);


module.exports = router;
