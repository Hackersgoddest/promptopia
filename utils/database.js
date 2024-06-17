import mongoose from "mongoose";

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);  // avoid deprecation warnings

    let connState = mongoose.connection.readyState;
    if (connState === 1) {
        console.log("MongoDB is already connected");
        return;
    }

    if (connState === 2) {
        console.log("MongoDB is connecting...");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "promptopia",
            bufferCommands: true
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}