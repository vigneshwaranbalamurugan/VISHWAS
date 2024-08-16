import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const farmerSchema = new mongoose({
    userName: {
        firstName: {
            type: String,
            required: true
        },
        middleName: {
            type: String
        },
        lastName: {
            type: String,
            required: true
        }
    },
    mobileNumber: {
        type: String,
        minlength: 10,
        maxlength: 10,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        default: null
    },
    age: {
        type: Number,
        default: null,
    },
    dateOfBirth: {
        type: Date,
        default: new Date('0000-00-00')
    },
    password: {
        type: String,
        required: true, 
        select: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

// Pre-save hook to hash the password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

const Farmer = mongoose.model('User', farmerSchema);

export default Farmer;