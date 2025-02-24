import  express from "express";
import { login, logout, newUser } from "../controllers/user.controllers.js";


const router=express.Router();

router.post("/login",login);
router.post("/new",newUser);
router.get("/logout",logout);


export default router;