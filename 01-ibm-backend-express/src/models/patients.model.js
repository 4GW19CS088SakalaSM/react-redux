import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    insuranceId: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dateOfBirth: {
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
    }
    // avatar: {
    //     type: String,
    //     default: ''
    // }
});

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
