const express = require('express');
const router = new express.Router();
const Posts = require("../models/posts");



// router.get("/posts", async (req, res) => {
//     try {
//         const result = await Posts.find();
//         res.status(200).send(result);

//     } catch (err) {
//         res.send("Something Went Wrong");
//     }
// });

router.get("/post/:slug", async (req, res) => {
    const getSlug = req.params.slug;
    res.render("singlePost");
});

// POST 
router.post("/posts", async (req, res) => {
    try {
        // Processing Title for Slug
        const postTitle = req.body.title;
        const filteringTitle = postTitle.slice().toLowerCase().split(" ");
        const filteredWord = filteringTitle.filter((word) => {
            if (word != "") {
                return word;
            }
        })
        const finalSlug = filteredWord.join("-");

        // Inserting Data to DB
        const postData = new Posts({
            title: req.body.title,
            content: "This is a test Post title",
            tags: req.body.tags,
            category: req.body.category,
            author: "Rijan Neupane",
            img: "http://localhost:3000/static/media/pic1.086cec09c8b1bb753420.png",
            permalink: finalSlug,
            metadescription: req.body.metadescription
        });
        const savePost = await postData.save();
        res.status(200).send(savePost);
    } catch (err) {
        res.send(`Something Went wrong while posting`);
        console.log(err);
    }
})

module.exports = router;