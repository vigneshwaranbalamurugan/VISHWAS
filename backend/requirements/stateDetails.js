import State from "../models/stateModel.js";

export const saveState = async (req, res) => {
    try {
        const { state } = req.body;
        const existingState = await State.findOne({
            name: state
        });
        if (existingState) {
            return res.status(400).json({ message: 'State is already exists' });
        }
        const newState = new State({
            name: state
        });
        await newState.save();
        return res.status(201).json({ message: 'State stored successfully' });

    } catch (error) {
        console.error('Error getting OTP:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};