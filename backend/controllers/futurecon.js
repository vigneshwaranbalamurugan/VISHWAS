import CropRequest from '../models/CropRequest.js'; // Import the CropRequest model

export const storeCropRequestData = async (req, res) => {
    try {
        const { cropType, estimatedEndDate, quantity, requestDetails } = req.body; // Extract data from the request body

        // Create a new crop request instance with the extracted data
        const newCropRequest = new CropRequest({
            cropType,
            estimatedEndDate,
            quantity,
            requestDetails,
        });

        // Save the crop request data to the database
        const savedCropRequest = await newCropRequest.save();

        res.status(201).json({ message: "Crop request data saved successfully", cropRequest: savedCropRequest });
    } catch (error) {
        res.status(500).json({ message: "Failed to save crop request data", error: error.message });
    }
};
