import mongoose from "mongoose";
import bluebird from "bluebird";

// connect to DB
let connectDB = () => {
    mongoose.Promise = bluebird;
    let DB_CONENTION = "mongodb";
    let DB_HOST = "localhost";
    let DB_PORT = 27017;
    let DB_NAME = "demo";
    let DB_USERNAME = "";
    let DB_PASSWORD = "";
    let URI = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;

    return mongoose.connect(URI, { useMongoClient: true });
};

module.exports = connectDB;