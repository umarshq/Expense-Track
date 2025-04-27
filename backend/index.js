import express from "express";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import cors from "cors";
import connectDB from "./database/db.js";
import userRoutes from "./routes/user.route.js";
import expenseRoute from "./routes/expense.route.js";


configDotenv();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.static("public"));

// Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/expense", expenseRoute);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
