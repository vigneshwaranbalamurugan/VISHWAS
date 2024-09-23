import { API_URL } from '@env';

export const fetchContractorData = async (mobileNumber) => {
  try {
    const response = await fetch(`${API_URL}/contractor/get-buyer-data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mobileNumber }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch contractor data');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching contractor data:', error);
    throw error;
  }
};
