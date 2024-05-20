import mongoose from "mongoose";

const adminModel =new mongoose.Schema({
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
})

const Admin = mongoose.model('Admin',adminModel)

export default Admin;