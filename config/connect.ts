import mongoose from "mongoose";

const connectDB = (url: string) => {
    console.log("DB Connected")
    return mongoose.connect(url)
}

export {connectDB}