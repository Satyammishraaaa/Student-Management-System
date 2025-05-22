// db database connectivity is done by mongoose - mongoDB
// it gives promise function

const mongoose = require('mongoose');
require('dotenv').config();
const liveUrl = process.env.MONGO_URI;
// const local_URL = 'mongodb://127.0.0.1:27017/Practice_Admission_Portal'


const connectDB = () => {
    return mongoose.connect(liveUrl)
    // return mongoose.connect(local_URL)
        .then(() => {
            // console.log("Connect Successfully")
            console
            .log("MongoDB Atlas Connect Successfully")
        }).catch((error) => {
            console.log(error)
        })
}
module.exports = connectDB;