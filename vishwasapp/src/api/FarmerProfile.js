import { API_URL } from '@env';

export const fetchFarmerDetails = async (mobileNumber) => {
    try {
      const response = await fetch(`${API_URL}/farmer/get-farmer-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobileNumber }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch farmer data');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching farmer data:', error);
      throw error; // Re-throw the error for handling in the component
    }
  };
  