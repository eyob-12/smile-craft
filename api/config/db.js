import mongoose from 'mongoose';

const connectDatabase = async () => {
    try {
        mongoose.connect(process.env.MONGO)
        console.log("Conntected to Mongodb")
    } catch (err) {
        console.log(err)
    }
}

export default connectDatabase;