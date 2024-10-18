import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    userName: {type: String},
    Name: {type: String},
    userEmail: {type: String},
    userContact: {type: Number},
    userAddress: {type: String},
    password: {type: String},
    city: {type: String},
    cart: {type: Array},
})

const userModel = mongoose.model("User_collection", userSchema);
 export default userModel;