import mongoose from "mongoose";
import "dotenv/config";

mongoose.set("strictQuery", false);

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

const mongodbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log('MongoDB Connected');
    } catch (error: any) {
        console.log(error.message);
    }
};

export default mongodbConnect;
