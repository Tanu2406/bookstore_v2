import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;



export const signup = async (req, res) => {
  const JWT_SECRET = process.env.JWT_SECRET;
    try {
      console.log("JWT_SECRET:", process.env.JWT_SECRET);
      console.log("Signup data received:", req.body);
      const { name, email, password } = req.body;
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const hashedPassword = await bcryptjs.hash(password, 10);
  
      const createdUser = new User({
        name,
        email,
        password: hashedPassword,
      });
  
      await createdUser.save();
  
      // Generate JWT
      const token = jwt.sign(
        { _id: createdUser._id, email: createdUser.email, name: createdUser.name },
        JWT_SECRET,
        { expiresIn: "1h" }
      );
  
      res.status(201).json({
        message: "User created successfully",
        token,
        user: {
          _id: createdUser._id,
          name: createdUser.name,
          email: createdUser.email,
        },
      });
    } catch (error) {
      console.log("Error:" + error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  

  export const login = async (req, res) => {
    const JWT_SECRET = process.env.JWT_SECRET;
    
    try {
      console.log("JWT_SECRET:", process.env.JWT_SECRET);
      console.log("Signup data received:", req.body);
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: "Invalid Username and Password" });
      }
  
      const isMatch = await bcryptjs.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid Username and Password" });
      }
  
      // Generate JWT
      const token = jwt.sign(
        { _id: user._id, email: user.email, name: user.name },
        JWT_SECRET,
        { expiresIn: "1h" }
      );
  
      res.status(200).json({
        message: "Login Successfully",
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      console.log("Error:" + error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  