const express = require("express");
const router = express.Router();
const studentRouter = require("./api/studentRoute")
const studentAuthRouter = require("./api/studentAuthRouter")

router.use("/Student",studentRouter)
router.use("/Student/Auth",studentAuthRouter)



module.exports = router;