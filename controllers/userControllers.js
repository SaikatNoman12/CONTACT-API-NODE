import bcrypt from "bcrypt";
import asyncHandler from 'express-async-handler';
import jwt from "jsonwebtoken";
import User from '../models/userModel.js';

/**
 * @des `register user`
 * @route `register API api/users/register`
 * @access `public`
*/
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    else {
        const userAvailable = await User.findOne({ email });
        if (userAvailable) {
            res.status(400);
            throw new Error("User already registered");
        }
        else {
            // Hashed Password
            const hashedPassword = await bcrypt.hash(password, 10);
            const createNewUser = await User.create({
                username,
                email,
                password: hashedPassword
            });
            if (createNewUser) {
                res.status(201).json({
                    _id: createNewUser.id,
                    email: createNewUser.email
                });
            }
            else {
                res.status(400);
                throw new Error("user data is not valid!");
            }
            res.status(200).json({ msg: "Register new user!" });

        }

    }
});


/**
 * @des `login user`
 * @route `login API api/users/register`
 * @access `public`
*/
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new Error("All fields are mandatory!");
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            },
        },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: "15min"
            }
        );
        res.status(200).json({ accessToken });
    }
    else{
        res.status(401);
        throw new Error("Email or Password nor valid!");
    }
});

/**
 * @des `current user`
 * @route `current API api/users/current`
 * @access `private`
*/
const currentUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
});

export { currentUser, loginUser, registerUser };

