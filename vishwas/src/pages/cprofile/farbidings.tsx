import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface FarmerRequest {
  _id: string;
  farmerName: string;
  location: string;
  landArea: number;
  quantity: number;
  duration: number;
  availableDate: string;
  profileUrl?: string;
  additionalNotes?: string;
  status?: string; // Add status to the interface if needed
}

const Farbidings: React.FC = () => {
  const [farmerRequests, setFarmerRequests] = useState<FarmerRequest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFarmerRequests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/farmer/freq'); // Replace with your backend URL
        setFarmerRequests(response.data);
      } catch (err) {
        setError('Failed to fetch farmer requests');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFarmerRequests();
  }, []);

  const handleAccept = async (id: string) => {
    try {
      await axios.post(`http://localhost:5000/api/v1/farmer/accept/${id}`);
      setFarmerRequests(farmerRequests.map(req => 
        req._id === id ? { ...req, status: 'Accepted' } : req
      ));
    } catch (err) {
      console.error('Failed to accept request', err);
    }
  };

  const handleReject = async (id: string) => {
    // Ask for confirmation before deleting
    const isConfirmed = window.confirm("Are you sure you want to reject and delete this request?");
  
    if (isConfirmed) {
      try {
        // Send DELETE request to the backend
        await axios.delete(`http://localhost:5000/api/v1/farmer/reject/${id}`);
        
        // Update the local state to remove the rejected request
        setFarmerRequests(farmerRequests.filter(req => req._id !== id));
      } catch (err) {
        console.error('Failed to reject request', err);
      }
    }
  };

  if (loading) return <p className="text-center text-lg font-semibold">Loading...</p>;
  if (error) return <p className="text-center text-lg font-semibold text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Farmer Requests</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-green-200 text-green-900">
            <th className="py-3 px-4 border-b">Farmer Name</th>
            <th className="py-3 px-4 border-b">Location</th>
            <th className="py-3 px-4 border-b">Land Area (acres)</th>
            <th className="py-3 px-4 border-b">Quantity (kg)</th>
            <th className="py-3 px-4 border-b">Duration (days)</th>
            <th className="py-3 px-4 border-b">Available By</th>
            <th className="py-3 px-4 border-b">Additional Notes</th>
            <th className="py-3 px-4 border-b">Profile URL</th>
            <th className="py-3 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {farmerRequests.map(request => (
            <tr key={request._id} className="hover:bg-green-100">
              <td className="py-2 px-4 border-b">{request.farmerName}</td>
              <td className="py-2 px-4 border-b">{request.location}</td>
              <td className="py-2 px-4 border-b">{request.landArea}</td>
              <td className="py-2 px-4 border-b">{request.quantity}</td>
              <td className="py-2 px-4 border-b">{request.duration}</td>
              <td className="py-2 px-4 border-b">{new Date(request.availableDate).toLocaleDateString()}</td>
              <td className="py-2 px-4 border-b">
                {request.additionalNotes || '     -      '}
              </td>
              <td className="py-2 px-4 border-b">
                {request.profileUrl ? (
                  <a href={request.profileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    View Profile
                  </a>
                ) : (
                  'No URL'
                )}
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleAccept(request._id)}
                  className="mr-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleReject(request._id)}
                  className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Farbidings;
