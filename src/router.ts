import express from "express";
const router = express.Router();
import memberController from "./controller/member.controller";
import uploader from "./libs/utilis/uploader";
import productController from "./controller/product.controller";

// React App

// Member
router.get("/member/restaurant", memberController.getRestaurant);
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.post(
  "/member/logout",
  memberController.verifyAuth,
  memberController.logout
);
router.get(
  "/member/detail",
  memberController.verifyAuth,
  memberController.getMemberDetail
);
router.post(
  "/member/update",
  memberController.verifyAuth,
  uploader("members").single("memberImage"),
  memberController.updateMember
);

router.get("/member/top-users", memberController.getTopUsers);

// Product

router.get("/product/all", productController.getProducts);

// Order

export default router;
