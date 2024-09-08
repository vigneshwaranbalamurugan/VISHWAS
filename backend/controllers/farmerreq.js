import FarmerRequest from '../models/FarmerRequest.js'; // Import the FarmerRequest model

// Function to store farmer request data
export const storeFarmerRequestData = async (req, res) => {
  try {
    const { farmerName, location, landArea, quantity, duration, availableDate, profileUrl, additionalNotes } = req.body; // Extract data from the request body

    // Create a new farmer request instance with the extracted data
    const newFarmerRequest = new FarmerRequest({
      farmerName,
      location,
      landArea,
      quantity,
      duration,
      availableDate,
      additionalNotes, // Corrected to match schema
      profileUrl,
    });

    // Save the farmer request data to the database
    const savedFarmerRequest = await newFarmerRequest.save();

    res.status(201).json({ message: "Farmer request data saved successfully", farmerRequest: savedFarmerRequest });
  } catch (error) {
    res.status(500).json({ message: "Failed to save farmer request data", error: error.message });
  }
};

// Function to fetch and print all farmer request data
export const getFarmerRequests = async (req, res) => {
  try {
    // Fetch all farmer requests from the database
    const farmerRequests = await FarmerRequest.find();

    // Print the fetched farmer requests to the console
    console.log("Fetched Farmer Requests:", farmerRequests);

    // Respond with the fetched data
    res.status(200).json(farmerRequests);
  } catch (error) {
    // Handle errors and respond with a message
    console.error("Error fetching farmer requests:", error);
    res.status(500).json({ message: "Failed to fetch farmer requests", error: error.message });
  }
};

export const acceptFarmerRequest = async (req, res) => {
    const { id } = req.params;
    try {
      // Update the request status to 'Accepted'
      const updatedRequest = await FarmerRequest.findByIdAndUpdate(id, { status: 'Accepted' }, { new: true });
  
      if (!updatedRequest) {
        return res.status(404).json({ message: 'Farmer request not found' });
      }
  
      res.status(200).json({ message: 'Farmer request accepted', farmerRequest: updatedRequest });
    } catch (error) {
      res.status(500).json({ message: 'Failed to accept farmer request', error: error.message });
    }
  };
  
  // Function to reject a farmer request
  export const rejectFarmerRequest = async (req, res) => {
    const { id } = req.params;
    try {
      // Remove the request from the database
      const deletedRequest = await FarmerRequest.findByIdAndDelete(id);
  
      if (!deletedRequest) {
        return res.status(404).json({ message: 'Farmer request not found' });
      }
  
      res.status(200).json({ message: 'Farmer request rejected' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to reject farmer request', error: error.message });
    }
  };
