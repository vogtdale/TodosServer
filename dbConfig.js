const mongoose = require("mongoose")

const db =  mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true, 
            useFindAndModify: false
        })

        console.log(`MongoDb connected`);
        

module.exports = db