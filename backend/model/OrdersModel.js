const { model } = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

// Create a model using the imported schema
const OrdersModel = new  model("order", OrdersSchema); 

// Export the model, not the schema
module.exports = { OrdersModel };
