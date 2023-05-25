const express = require("express");
const createGroupChat = require("../controllers/chatControllers");
const addToGroup = require("../controllers/chatControllers");
const removeFromGroup = require("../controllers/chatControllers");
const renameGroup = require("../controllers/chatControllers");
const accessChat = require("../controllers/chatControllers");
const fetchChats = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

module.exports = router;
