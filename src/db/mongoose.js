const mongoose = require('mongoose')
let uri=process.env.MONGODB_URI
mongoose.connect(uri, {
})