/*
    client_id serial PRIMARY KEY,
    client_name varchar(50) NOT NULL,
    client_phone varchar(50) NOT NULL,
    client_address varchar(50) NOT NULL,
    client_email varchar(50) NOT NULL,
    client_active_status boolean NOT NULL default true,
    client_instagram varchar(50) NOT NULL
 */

const clientModel = require("../models/client.model");
const ErrorHandler = require("../utils/errorHandler");
const asyncHandler = require("express-async-handler");

const createClient = asyncHandler(async (req, res, next) => {
  /* 
POST /api/clients
Description: Create a new client in the database.
Access: Seller and Admin
Request body: Client information (e.g., name, contact details)
Response: Newly created client object or success message
*/
});
const getClients = asyncHandler(async (req, res, next) => {
  /*
GET /api/clients
Description: Retrieve all clients from the database.
Access: Seller and Admin
Response: Array of client objects
*/
});
const getClientById = asyncHandler(async (req, res, next) => {
  /*
GET /api/clients/:id
Description: Retrieve a single client from the database by ID.
Access: Seller and Admin
Parameters: client ID
Response: Client object
*/
});
const updateClient = asyncHandler(async (req, res, next) => {
  /*
PUT /api/clients/:id
Description: Update a client in the database.
Access: Seller and Admin
Parameters: client ID
Request body: Updated client information
Response: Updated client object or success message
*/
});
const deleteClient = asyncHandler(async (req, res, next) => {
  /*
DELETE /api/clients/:id
Description: Delete a client from the database.
Access: Seller and Admin
Parameters: client ID
Response: Success message
*/
});
const updateStatusClient = asyncHandler(async (req, res, next) => {
  /*
PATCH /api/clients/:id/status
Description: Update the status of a client in the database.
Access: Seller and Admin
Parameters: client ID
Request body: Updated status information
Response: Updated client object or success message */
});

module.exports = {
  createClient,
  getClients,
  getClientById,
  updateClient,
  deleteClient,
  updateStatusClient,
};
