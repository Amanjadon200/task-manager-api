const mongoose = require('mongoose')
let uri=process.env.MONGODB_URI
console.log(uri)
mongoose.connect(uri, {
})