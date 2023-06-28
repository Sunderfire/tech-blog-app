const sequelize = require("../config/connection");
const { User, Blogpost } = require("../models");
const userData = require("./userSeed");
const blogPostData = require("./blogpostSeed");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  try {
    await User.bulkCreate(userData);
    await Blogpost.bulkCreate(blogPostData);
    console.log("Users successfully seeded");
  } catch (err) {
    console.error(err);
  }
  process.exit(0);
};

seedDatabase();
