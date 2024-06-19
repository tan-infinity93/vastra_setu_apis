import express from "express";
import "dotenv/config";

import { Accounts } from "./Security/models/accounts.model.js";

const app = express();
app.use(express.json());

const port = process.env.port || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})