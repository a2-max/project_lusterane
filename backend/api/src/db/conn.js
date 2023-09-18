const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/lusterane", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Database Connection Successful");
})
.catch((err) => {
    console.log("Database Connection Failed");
})