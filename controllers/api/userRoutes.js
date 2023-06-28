const router = require("express").Router();
const { User } = require("../../models/");

router.post("/login", async (req, res) => {
  try {
    const { email } = req.body;
    const userData = await User.findOne({
      where: { email },
    });
    console.log("User data:", userData);

    req.session.user_id = userData.id;
    req.session.logged_in = true;
    req.session.save(() => {
      console.log("user logged", userData);
      res.redirect("./dashboard");
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
