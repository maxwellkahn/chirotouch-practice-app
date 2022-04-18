const express = require("express");
const router = express.Router();
const patientsCtrl = require("../controllers/patients");

/* GET users listing. */
router.get("/", patientsCtrl.index);

module.exports = router;
