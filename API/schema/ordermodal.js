import mongoose, { Schema } from "mongoose";

const orderschema = new Schema({
    customerName: {type: String},
    customerContact: {type: String},
    customerAddress: {type: String},
    customerCity: {type: String},
    customerZipcode: {type: String},
    quantity: {type: String},
    size: {type: String},
    orderProduct: {type: String},
    prodName: {type: String},
    status: {type: String},
})

const OrderModal = mongoose.model('Order_Collection', orderschema);
export default OrderModal
