const express = require('express');
const app = express();
const router = new express.Router();
const Users = require("../models/users");
// const fileUpload = require("express-fileupload");
// app.use(fileUpload);

// Get
router.get("/users", async (req, res) => {
    try {
        const result = await Users.find();
        res.status(200).send(result);

    } catch (err) {
        res.send("Something Went Wrong");
    }
});

// POST 
router.post("/users", async (req, res) => {
    try {
        // Processing Profile Pic
        // console.log(req);
        console.log(req.foo);
        res.send(req.files);

        // Inserting Data to DB
        const userData = new Users({
            name: req.body.name,
            country: req.body.country,
            bio: req.body.bio,
            email: req.body.email,
            password: req.body.password
        });
        // const createUser = await userData.save();
        // console.log(createUser);
    } catch (err) {
        res.send(`Something Went wrong while creating user`);
        console.log(err);
    }
})

module.exports = router;
