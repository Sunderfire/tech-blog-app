const router = require("express").Router();
const { Blogpost } = require("../models");

const hasAuth = require("../utils/auth");

router.get("/", hasAuth, async (req, res) => {
  try {
    const postData = await Blogpost.findAll({
      where: {
        userId: req.session.userId,
      },
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("all-posts", {
      layout: "dashboard",
      posts,
    });
  } catch (err) {
    console.log("blogposts not found", err);
  }
});

module.exports = router;
