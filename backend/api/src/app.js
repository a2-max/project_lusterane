const express = require('express');
require("./db/conn");
const postRouter = require("./routers/posts");
const userRouter = require("./routers/users");
const loginAuth = require('./auth/login');
const path = require('path');
const cors = require('cors');
const Posts = require("./models/posts");
const fileUpload = require("express-fileupload");

const app = express();
const port = process.env.PORT || 8000;

// const cssPath = path.join("public");

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(postRouter);
app.use(userRouter);
app.use(cors());
app.set("view engine", "hbs");
app.use(express.static("public"));
app.use(loginAuth);
app.use(fileUpload);


app.get("/", (req, res) => {
    res.send("Home Page Working.");
});

// Faced error while using Fetch method in frontend so i pasted it here instead of router/posts
app.get("/posts", async (req, res) => {
    try {
        const getSlug = req.params.slug;
        // const result = await Posts.find();
        // res.status(200).send(result);

    } catch (err) {
        res.send("Something Went Wrong");
    }
});
// Fetching Post by Slug 
app.get("/posts/:slug", async (req, res) => {
    try {
        const getSlug = req.params.slug;
        const result = await Posts.find({slug: getSlug});
        res.status(200).send(result);
        res.render("singlePost");

    } catch (err) {
        res.send("Something Went Wrong");
    }
});

app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`);
});