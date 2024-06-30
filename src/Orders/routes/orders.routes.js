import express from "express";
import { 
    placeOrderController,
    getOrdersController,
    getOrderController,
    updateOrderController,
    deleteOrderController
} from "../controllers/orders.controller.js";

const router = express.Router();

router.post("/placeOrder", placeOrderController);
router.get("/getOrders/:account_id", getOrdersController);
router.get("/getOrder/:id/:account_id", getOrderController);
router.post("/updateOrder", updateOrderController);
router.delete("/deleteOrder/:id/:account_id", deleteOrderController);

export const ordersRouter = router;