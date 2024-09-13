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

// Function to fetch and print all crop request data
export const getCropRequests = async (req, res) => {
    try {
      // Fetch all crop requests from the database
      const cropRequests = await CropRequest.find();
  
      // Print the fetched crop requests to the console
      console.log("Fetched Crop Requests:", cropRequests);
  
      // Respond with the fetched data
      res.status(200).json(cropRequests);
    } catch (error) {
      // Handle errors and respond with a message
      console.error("Error fetching crop requests:", error);
      res.status(500).json({ message: "Failed to fetch crop requests", error: error.message });
    }
  };