import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mbeletato:123@users.grki4au.mongodb.net/signin-signup");

let db = mongoose.connection;

export default db;