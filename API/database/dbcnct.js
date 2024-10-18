import mongoose from "mongoose";

const connectdatabase = async(databaseURL) => {
    try {
        const dboptions = {
            dbName: 'ByteWithTheWEB'
        }
        await mongoose.connect(databaseURL, dboptions);
        console.log("Connected Successfully");
    } catch (error) {
        console.log(error);
    }
}

export default connectdatabase;