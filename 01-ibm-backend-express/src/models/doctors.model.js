import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default:''
    },
    gender: {
        type: String,
        required: false
    },
    specialization: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        default: ''
    },
    avatar: {
        type: String,
        default: ''
    }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;
