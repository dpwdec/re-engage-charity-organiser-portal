var express = require("express");
var router = express.Router();

var MemberController = require('../controllers/members');
var Member = require("../models/member");

router.get('/', MemberController.Members(Member));
router.post("/createMember", MemberController.CreateMember(Member));
router.post("/deleteMember", MemberController.DeleteMember(Member));

module.exports = router;