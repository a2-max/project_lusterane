const mongoose = require("mongoose");

const postSchema = {
    name: {
        type: String,
        // required: true
    },
    country: {
        type: String
    },
    bio: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    password: {
        type: String,
        // required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}

const Users = mongoose.model("Users", postSchema);

module.exports = Users;