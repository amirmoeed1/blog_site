const mongoose = require('mongoose')


 mongoose.connect("mongodb://localhost:27017/blog").then(()=>{console.log('db is connected')}).catch(()=>{console.log('db is not connected')})