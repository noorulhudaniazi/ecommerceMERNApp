import mongoose, { Schema } from "mongoose";

const adminschema = new Schema({
    adminemail: {type: String},
    adminname: {type: String, required: true},
    admincontact: {type: String, required: true},
    adminpassword: {type: String, required: true},
    adminsecretcode: {type: String, required: true},
    adminjob: {type: String, required: true}
})

const AdminModal = mongoose.model('Admin_Collection', adminschema);
export default AdminModal;