// routes/members.js

const express = require("express");
const HomepageController = require('../controllers/members');
let router = express.Router();

// dependency loaded
const Member = require("../models/member");

router.post("/createMember", HomepageController.CreateMember(Member));
router.post("/deleteMember", HomepageController.DeleteMember(Member));
router.get('/getMembers', HomepageController.Members(Member))

module.exports = router;