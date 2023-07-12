const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();
const User = require('../model/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const auth=require('../middleware/auth');


/*
this is to store the user data when one tries to registrer.....soo we need only one methode that is post.
*/

router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        profession: req.body.profession,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    });

    await user.save((err, success) => {
        res.send({ success })
    })
});

router.post('/signin', async (req, res) => {
    const secretkey = process.env.JWT_SECRET;
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).json({ error: "plz Filled th data " })
        }

        const userlogin = await User.findOne({ email: email });

        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            if (!isMatch) {
                res.status(400)
                    .json({ error: "Invalid Credientials" })
            } else {
                const token = jwt.sign({ user_id: userlogin._id }, secretkey, { expiresIn: "2h" });
                // console.log(token);

                res.status(200).json({
                    status: "success",
                    token,
                });
            }
        }
       


    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
