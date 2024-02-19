import dotenv from "dotenv";
import express from "express";
import connectDb from "./config/dbConnection.js";
import errorHandler from "./middleware/errorHandler.js";
import contactRoutes from "./routes/contactRoutes.js";
dotenv.config();


// database connection function
connectDb();

// constant variable
const app = express();
const port = process.env.port || 5000;

// express method
app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})