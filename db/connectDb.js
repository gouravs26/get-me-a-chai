import mongoose from "mongoose";

const connectDb = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }
        
        if (mongoose.connection.readyState === 1) {
            // console.log('Already connected to MongoDB');
            return mongoose.connection;
        }

        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        throw error; // Rethrow the error for proper handling
    }
};

export default connectDb;