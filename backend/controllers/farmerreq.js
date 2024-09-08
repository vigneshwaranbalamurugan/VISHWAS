import FarmerRequest from '../models/FarmerRequest.js'; // Import the FarmerRequest model

// Function to store farmer request data
export const storeFarmerRequestData = async (req, res) => {
  try {
    const { farmerName, location, landArea, quantity, duration, availableDate, profileUrl } = req.body; // Extract data from the request body

    // Create a new farmer request instance with the extracted data
    const newFarmerRequest = new FarmerRequest({
      farmerName,
      location,
      landArea,
      quantity,
      duration,
      availableDate,
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
