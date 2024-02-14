const mongoose = require("mongoose");
const initData =require("./data");
const Listing = require("../models/listing.js")

let MONGOOSE_url = 'mongodb://127.0.0.1:27017/wanderlust';

main().then(()=>{console.log("connection successful");})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGOOSE_url);
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data)
}

initDB();