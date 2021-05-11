const router = require("express").Router();
const userRoutes = require("./books");

router.use("/users", userRoutes);

module.exports = router;
