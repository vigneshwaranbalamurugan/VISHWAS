import { BASE_URL } from '@env';

export const loginFarmer = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/farmer/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to sign in');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message || 'An error occurred. Please try again later.');
  }
};
