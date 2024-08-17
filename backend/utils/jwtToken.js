import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secret_Key = process.env.JWT_SECRET;

export const generateToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            email: user.email,
        },
        secret_Key,
        { algorithm: 'HS256', expiresIn: '1h' }
    );
}

