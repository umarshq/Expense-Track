import express from "express";
import { addExpense } from "../controllers/expense.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";


const router = express.Router();



router.route("/add").post(isAuthenticated, addExpense);
router.route("/getall").get(isAuthenticated, addExpense);
router.route("/remove/:id").delete(isAuthenticated, addExpense);
router.route("/update/:id").put(isAuthenticated, addExpense);
router.route("/id/done").put(isAuthenticated, addExpense);



export default router;


