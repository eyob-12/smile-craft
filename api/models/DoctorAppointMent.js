import mongoose from 'mongoose';
const appointMentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
    },
    age: {
        type: String
    },
    weight: {
        type: String,
    },
    serviceTitle: {
        type: String
    },
    appointmantDate: {
        type: String,
        required: true
    },
    doctor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true })

export default mongoose.model('Appointments', appointMentSchema)