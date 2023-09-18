const mongoose = require("mongoose");

const postSchema = {
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: [String],
    category: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: "Anonymous"
    },
    permalink: {
        type: String,
        required: true
    },
    metadescription: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
}

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;