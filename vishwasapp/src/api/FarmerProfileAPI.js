import { BASE_URL } from '@env';


export const fetchFarmerData = async (mobileNumber) => {
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
  
      return await response.json();
    } catch (error) {
      throw error;
    }
  };