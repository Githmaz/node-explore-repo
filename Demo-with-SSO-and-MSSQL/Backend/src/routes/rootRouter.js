const express = require("express");
const router = express.Router();
const studentAuthRouter = require("./api/studentAuthRouter")

router.use("/Student/Auth",studentAuthRouter) 



module.exports = router;