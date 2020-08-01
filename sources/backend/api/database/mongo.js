const mongoose = require('mongoose')

function mongoConnect() {
    mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`,
        { useNewUrlParser: true, useUnifiedTopology: true })

        .then(() => console.log(`Connected to Mongo database ${process.env.DB_NAME} ! `))
        .catch(err => console.log(err))
}

module.exports = { mongoConnect }