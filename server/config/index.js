// import dotenv
const dotenv = require('dotenv');


dotenv.config();

// create a config object with PORT 
const config = {
    PORT: process.env.PORT,
    databaseUrl: process.env.MONGODB_URI
}





module.exports = config;