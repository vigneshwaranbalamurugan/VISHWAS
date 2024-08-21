import City from "../models/cityModel.js";
import State from "../models/stateModel.js";

export const saveCity = async (req, res) => {
    try{
        const {state,city}=req.body;
        const oldState = await State.findOne({ name: state });
        if (!oldState) {
          throw new Error('State not found');
        }
        const oldCity = await City.findOne({name:city});
        if(oldCity){
            return res.status(400).json({ message: 'City is already exists' }); 
        }
        const newcity = new City({ name: city, state: oldState._id });
        await newcity.save();
        return res.status(201).json({ message: 'City stored successfully' });
    } catch (error) {
        console.error('Error getting OTP:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
