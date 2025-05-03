import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error(`Error to connect: ${error}`);
    }
}

export default connectDB;
