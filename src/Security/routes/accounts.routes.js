import express from "express";
import { 
    createAccountController,
    getAccountController,
    getAccountImageController,
    getAccountsByCityController,
    updateAccountController,
    deleteAccountController
} from "../controllers/accounts.controller.js";
import { upload } from "../../config/multerConfig.js";

const router = express.Router();

router.get("/getAccount/:id", getAccountController);
router.get("/getAccountImage/:id", getAccountImageController);
router.get("/getAccounts/:city", getAccountsByCityController);
router.post("/createAccount", upload.single("brand_image"), createAccountController);
router.post("/updateAccount", upload.single("brand_image"), updateAccountController);
router.delete("/deleteAccount/:id", deleteAccountController);

export const accountsRouter = router;