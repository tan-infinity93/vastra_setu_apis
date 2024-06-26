import express from "express";
import "dotenv/config";

// Import routers
import { accountsRouter } from "./Security/routes/accounts.routes.js";
import { productsRouter } from "./Products/routes/products.routes.js";
import { ordersRouter } from "./Orders/routes/orders.routes.js";

const app = express();
app.use(express.json());

app.use("/api/security", accountsRouter);
app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);

const port = process.env.port || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})