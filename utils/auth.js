const hasAuth = (req, res, next) => {
  if (!req.session || !req.session.logged_in) {
    res.status(401).json({ message: "Not logged in" });
  } else {
    next();
  }
};

module.exports = hasAuth;
