/*
order_product_order_id REFERENCES order(order_id),
order_product_product_id REFERENCES product(product_id), 
order_product_quantity integer NOT NULL default 1,
order_product_commission_payment_status boolean NOT NULL default false,
order_product_packaging boolean NOT NULL default false,
order_product_withdrawn boolean NOT NULL default false,
order_product_created_at date NOT NULL default CURRENT_DATE
*/

const orderProductModel = require("../models/orderProduct.model");
const ErrorHandler = require("../utils/errorHandler");
const asyncHandler = require("express-async-handler");

const createOrderProduct = asyncHandler(async (req, res, next) => {
  /* 
POST /api/order_products
Description: Create a new order_product in the database.
Access: Seller and Admin
Request body: order_product information (e.g., order ID, product ID, quantity)
Response: Newly created order_product object or success message
*/
});
const getOrderProducts = asyncHandler(async (req, res, next) => {
  /* GET /api/order_products
Description: Retrieve all order_products from the database, optionally filtered by query parameters.
Access: Seller and Admin
Query parameters:
order: Filter returns by order ID
product: Filter returns by product ID
packaging status: Filter returns by packaging status
Response: Array of order_product objects */
});
const getOrderProductById = asyncHandler(async (req, res, next) => {
  /*
GET /api/order_products/:id
Description: Retrieve a single order_product from the database by ID.
Access: Seller and Admin
Parameters: order_product ID
Response: order_product object
*/
});
const updateOrderProduct = asyncHandler(async (req, res, next) => {
  /*
PUT /api/order_products/:id
Description: Update an order_product in the database.
Access: Seller and Admin
Parameters: order_product ID
Request body: Updated order_product information
Response: Updated order_product object or success message
*/
});
const updateStatusOrderProduct = asyncHandler(async (req, res, next) => {
  /*
PATCH /api/order_products/:id/status
Description: Update the status of an order_product in the database.
Access: Seller and Admin
Parameters: order_product ID
Request body: Updated status information
Response: Updated order_product object or success message
*/
});
const deleteOrderProduct = asyncHandler(async (req, res, next) => {
  /*
DELETE /api/order_products/:id
Description: Delete an order_product from the database.
Access: Seller and Admin
Parameters: order_product ID
Response: Success message
*/
});

module.exports = {
  createOrderProduct,
  getOrderProducts,
  getOrderProductById,
  updateOrderProduct,
  updateStatusOrderProduct,
  deleteOrderProduct,
};
