const router = require("express").Router();

const hasAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  await res.render("home");
});

module.exports = router;
