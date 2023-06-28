const router = require("express").Router();

router.get("/", async (req, res) => {
  await res.render("home");
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    await res.redirect("/dashboardRoutes");
    return;
  }
  res.render("login");
});

router.get("/signup", async (req, res) => {
  await res.render("signup");
  return;
});

module.exports = router;
