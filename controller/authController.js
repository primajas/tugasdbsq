import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../model/Admin.js";

const generateToken = (admin) => {
  return jwt.sign(
    { id: admin.id, name: admin.name },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
  );
};
 
export const register = async (req, res) => {
  try {
    const { name, password } = req.body;

    const existingAdmin = await Admin.findOne({ where: { name } });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ name, password: hashedPassword });

    const token = generateToken(admin);

    res.status(201).json({ message: "Admin registered successfully", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { name, password } = req.body;

    const admin = await Admin.findOne({ where: { name } });
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid password" });

    const token = generateToken(admin);

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
