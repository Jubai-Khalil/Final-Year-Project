import User from "../models/UserSchema.js"
import Doctor from "../models/DoctorSchema.js"
import jwt from "jsonwebtoken"

export const authenticate = async (req, res, next) => {

    const authToken = req.headers.authorization;

    if (!authToken || !authToken.startsWith("Bearer ")){
        return res.status(401).json({success:false,message:"No Token, authorization failed"})
    }

    try {
        const token = authToken.split(" ")[1];

        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)

        req.userId = decoded.userId
        req.role = decoded.role

        next()
    } catch (error) {
        if (error.name == "TokenExpiredError"){
            return res.status(401).json({message:"Token has expired"})
        }
        return res.status(401).json({success:"false",message:"Invalid token "+ error})
    }
}

export const restrict = roles => (req, res, next) => {
    const userRole = req.role;

    if (!roles.includes(userRole)) {
        return res.status(401).json({ success: false, message: "You aren't authorized" });
    }

    next();
};


