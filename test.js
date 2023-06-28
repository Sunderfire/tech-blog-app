const { User } = require("./models"); // Update the path to your User model

async function testFindOne() {
  try {
    const userData = await User.findOne({
      where: { email: "thomasthetank@gmail.com" }, // Add the conditions here
    });
    console.log("User data:", userData);
  } catch (err) {
    console.log("Error:", err);
  }
}

// Call the test function
testFindOne();
