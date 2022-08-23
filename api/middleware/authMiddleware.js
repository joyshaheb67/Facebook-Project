import errorCreate from "../controllers/errorController.js";
import jwt from "jsonwebtoken";

//check user by authenticated
export const authMiddleware = (req, res, next) =>{

    try {
        const token = req.cookies.access_token;

        //check token
        if(!token){
            return next(errorCreate(401, "You are Not Valid User"))
        }

        //if logged in
        const login_user = jwt.verify(token, process.env.JWT_KEY);

        if(!login_user){
            return next(errorCreate(401, "invalid Token"))
        };

        if(login_user){
            req.user = login_user;
            next();
        }



    } catch (error) {
        console.log(error);
    }


};