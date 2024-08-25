import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const farmerSchema = new mongoose.Schema({
    mobileNumber: {
        type: String,
        minlength: 10,
        maxlength: 10,
        unique:true,
        required: true
    },
    password: {
        type: String,
        required: true, 
        select: false
    },
    isfilled:{
        type:Boolean,
        default:false,
    },
    role:{
        type:String,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

// Pre-save hook to hash the password before saving
farmerSchema.pre('save', async function (next) {
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