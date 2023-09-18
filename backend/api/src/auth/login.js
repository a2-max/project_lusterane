const express = require('express');
const router = new express.Router();
const Users = require("../models/users");
require("../db/conn");

router.post("/login-auth", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const emailDB = await Users.findOne({ email: email });
        if(emailDB){
            if (emailDB.password == password) {
                console.log("login Successful");
            } else {
                console.log("Invalid Login Credentials");
            }
        }else{
            console.log("This Email doesn't exist");
        }

    } catch (error) {
        console.log("Something Went Wrong");
        console.log(error);
    }
})

module.exports = router;
