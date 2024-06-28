import express from "express";
import "dotenv/config";

import { Orders } from "./Orders/orders.model.js";

// Import routers
import { accountsRouter } from "./Security/routes/accounts.routes.js";
import { productsRouter } from "./Products/routes/products.routes.js";

const app = express();
app.use(express.json());

app.use("/api/security", accountsRouter);
app.use("/api/products", productsRouter);

const port = process.env.port || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})