import express from "express";
import { 
    addProductsController,
    getProductsController,
    getProductController,
    updateProductController,
    deleteProductController 
} from "../controllers/products.controller.js";
import { upload } from "../../config/multerConfig.js";

const router = express.Router();

router.post("/addProduct", upload.single("product_image"), addProductsController);
router.get("/getProducts/:account_id", getProductsController);
router.get("/getProduct/:id/:account_id", getProductController);
router.post("/updateProduct", upload.single("product_image"), updateProductController);
router.delete("/deleteProduct/:id", deleteProductController);

export const productsRouter = router;