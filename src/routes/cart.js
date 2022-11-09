const express = require("express");
const {
  getCartItems,
  addItemToCart,
  removeCartItems,
} = require("../controller/cart");
const {
  requireSignin,
  userMiddleware,
} = require("../common-middleware.js/index");
const router = express.Router();

router.post(
  "/user/cart/addtocart",
  requireSignin,
  userMiddleware,
  addItemToCart
);
router.post("/user/getCartItems", requireSignin, userMiddleware, getCartItems);

// router.post(
//   "/user/cart/removeItem",
//   requireSignin,
//   userMiddleware,
//   removeCartItems
// );

module.exports = router;
