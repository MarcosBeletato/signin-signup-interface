import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mbeletato:123@nodeapi.qgql1vs.mongodb.net/?");

let db = mongoose.connection;

export default db;