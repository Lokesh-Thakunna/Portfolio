import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Admin from "../models/admin.js";
import Contact from "../models/Contact.js";

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  let admin = await Admin.findOne({ email });

  if (!admin) {
    const hashed = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
    admin = await Admin.create({
      email: process.env.ADMIN_EMAIL,
      password: hashed,
    });
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: admin._id, email: admin.email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
};

export const getMessages = async (req, res) => {
  const messages = await Contact.find().sort({ createdAt: -1 });
  res.json(messages);
};
