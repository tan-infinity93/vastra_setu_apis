import express from "express";
import { 
    createAccountController,
    getAccountController,
    updateAccountController,
    deleteAccountController,
    addProductsController,
    getProductsController, 
    getProductController,
    updateProductController,
    deleteProductController
} from "../controllers/accounts.controller.js";
import { upload } from "../../config/multerConfig.js";

const router = express.Router();

router.get("/getAccount/:id", getAccountController);
router.post("/createAccount", upload.single("brand_image"), createAccountController);
router.post("/updateAccount", upload.single("brand_image"), updateAccountController);
router.delete("/deleteAccount/:id", deleteAccountController);

router.post("/addProduct", addProductsController);
router.get("/getProducts/:account_id", getProductsController);
router.get("/getProduct/:id/:account_id", getProductController);
router.post("/updateProduct", upload.single("product_image"), updateProductController);
router.delete("/deleteProduct/:id", deleteProductController);

export const accountsRouter = router;