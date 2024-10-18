import mongoose, { Schema } from "mongoose";

const productschema = new Schema({
    title: {type: String, require: true},
    color: {type: String, require: true},
    price: {type: Number, require: true},
    tagss: {type: Array, require: true},
    images: {type: Array},
    status: {type: String},
    condiTion: {type: String},
    description: {type: String, require: true},
    date: {type: Date},

})

const productmodel = mongoose.model("product_collection", productschema);
 export default productmodel;
 