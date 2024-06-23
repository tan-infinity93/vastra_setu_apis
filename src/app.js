import express from "express";
import "dotenv/config";

// Import routers
import { accountsRouter } from "./Security/routes/accounts.routes.js";
import { Products } from "./Security/models/products.model.js";

const app = express();
app.use(express.json());

app.use("/api/security", accountsRouter);

const port = process.env.port || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})