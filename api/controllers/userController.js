import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import creatError from './errorController.js';
import jwt from 'jsonwebtoken';

/**
 * @access public
 * @route /api/user
 * @method GET
 */
export const getAllUser = async (req, res, next) =>{
    
    try {
        const users = await User.find();
        res.status(200).json(users)

    } catch (error) {
        next(error)
    }

};
/**
 * @access public
 * @route /api/user/:id
 * @method GET
 */
export const getsingleUser = async (req, res, next) =>{
    const {id} = req.params;

    try {
        const user = await User.findById(id);
        res.status(200).json(user)

    } catch (error) {
        next(error)
    }
}
/**
 * @access public
 * @route /api/user
 * @mehod POST
 */
export const createUser = async (req, res, next) =>{

    //make hash pass
    const salt = await bcrypt.genSalt(10);
    const hash_pass = await bcrypt.hash(req.body.password, salt);
    
    try {
        const user = await User.create({...req.body, password: hash_pass});
        res.status(200).json(user)

    } catch (error) {
        next(error)
    }

}
/**
 * @access public
 * @route /api/user/:id
 * @method PUT/PATCH
 */
export const updateUser = async (req, res, next) => {
    const {id} = req.params;

    try {
        const user = await User.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(user)

    } catch (error) {
        next(error)
    }
}
/**
 * @access publilc
 * @route /api/user/:id
 * @method DELETE
 */
export const deleteUser = async (req, res, next) =>{
    const {id} = req.params;

    try {
        const user = await User.findByIdAndDelete(id);
        res.status(200).json(user)

    } catch (error) {
        next(error)
    }
}

// User Auth Controller

/**
 * @access public
 * @route /api/user/login
 * @mehod POST
 */
 export const userLogin = async (req, res, next) =>{

    try {
        // find user by email
        const login_user = await User.findOne({email : req.body.email});

        //check user
        if(!login_user){
            return next(creatError(404, 'user not found'));
        };
        // check password
        const passwordCheck = await bcrypt.compare(req.body.password, login_user.password);
        //password handelar
        if(!passwordCheck){
            return next(creatError(404, 'Wrong password'))
        };

        // create token
        const token = jwt.sign({ id: login_user._id, isAdmin: login_user.isAdmin}, process.env.JWT_KEY)

        const {_id, isAdmin, password, ...login_info} = login_user._doc;

        res.cookie("access_token", token).status(200).json({
            token : token,
            user : login_info
        })


    } catch (error) {
        next(error)
    }

}
/**
 * @access public
 * @route /api/user/register
 * @mehod POST
 */
 export const userRegister = async (req, res, next) =>{

    //make hash pass
    const salt = await bcrypt.genSalt(10);
    const hash_pass = await bcrypt.hash(req.body.password, salt);
    
    try {
        const user = await User.create({...req.body, password: hash_pass});
        res.status(200).json(user)

    } catch (error) {
        next(error)
    }

}