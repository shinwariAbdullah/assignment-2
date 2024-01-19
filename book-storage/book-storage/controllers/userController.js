const { User } = require("../config/database");
const signAccessToken = require("../config/generateToken");
const bcrypt = require("bcrypt");

// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      // Check if required fields are provided
      return res
        .status(400)
        .json({ success: false, error: "All fields are required" });
    }

    // Check if the email already exists in the database
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, error: "Email already exists" });
    }

    // Hash the password before storing it in the database
    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ success: true, user });
  } catch (error) {
    console.error(error);

    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      // Check if email and password are provided
      return res
        .status(400)
        .json({ success: false, error: "Email and password are required" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      res.status(401).json({ success: false, error: "Invalid credentials" });
      return;
    }

    const token = signAccessToken(user.id);
    console.log(token);

    res.json({ success: true, token: token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

module.exports = {
  createUser,
  login
};
