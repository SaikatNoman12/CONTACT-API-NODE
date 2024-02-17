import dotenv from "dotenv";
import express from "express";
import contactRoutes from "./routes/contactRoutes.js";
dotenv.config();

// constant variable
const app = express();
const port = process.env.port || 5000;

// express method
app.use(express.json());
app.use("/api/contacts", contactRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})