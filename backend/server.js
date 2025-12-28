import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import connectDB from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";


dotenv.config();

const app = express();

/* Connect DB */
connectDB();

/* Middlewares */
app.use(cors());
app.use(express.json());

/* Routes */
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);


app.get("/", (req, res) => {
  res.send("Portfolio Backend Running 🚀");
});

/* Start Server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
