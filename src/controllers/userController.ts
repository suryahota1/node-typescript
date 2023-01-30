import { Request, Response } from "express";
import User from "../models/userSchema";

const createUser = async ( req: Request, res: Response ) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const newUser = new User({
            firstName,
            lastName,
            email,
            password
        });
        const savedUser = await newUser.save();
        return res.status(201).json(savedUser);
    } catch ( error: any ) {
        return res.status(500).json({message: error.message});
    }
}

const getUser = async ( req: Request, res: Response ) => {
    try {
        const { userId } = req.params;
        const user = await User.findOne({ _id: userId });
        if ( !user ) return res.status(404).json({ message: "User not found !"});
        return res.status(200).json(user);
    } catch( error: any ) {
        return res.status(500).json({ message: error.message });
    }
}

export default { createUser, getUser };
