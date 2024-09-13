import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Define types for contractor data
interface Contractor {
  mobileNumber: string;
  personalIdentification: {
    photo: string;
    aadhaarNumber: string;
  };
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    age: number;
    dob: string;
  };
  locationInfo: {
    state: string;
    district: string;
    pincode: string;
    longitude: number;
    latitude: number;
    address: string;
  };
  companyDetails: {
    name: string;
    address: string;
    establishedYear: number;
    tinNumber: string;
    phoneNumber: string;
    email: string;
    website: string;
    ceoName: string;
    headquartersLocation: string;
  };
}

const ContractorProfile = () => {
  const [contractor, setContractor] = useState<Contractor | null>(null);
  const { mobileNumber } = useParams<{ mobileNumber: string }>();

  useEffect(() => {
    const fetchContractor = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/contractor/get-buyer-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ mobileNumber }),
        });
        if (response.ok) {
          const data = await response.json();
          setContractor(data);
        } else {
          const errorData = await response.json();
          alert(errorData.message || 'Failed to fetch contractor data');
        }
      } catch (error) {
        console.error('Error fetching contractor data:', error);
      }
    };

    fetchContractor();
  }, [mobileNumber]);

  if (!contractor) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 mt-5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-8">Contractor Profile</h1>

        {/* Contractor Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-blue-500 mx-4 my-8 p-6">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <img
              className="h-40 w-40 object-cover rounded-full border-4 border-blue-500 md:mr-8"
              src={contractor.personalIdentification.photo}
              alt={`${contractor.personalInfo.firstName} ${contractor.personalInfo.lastName}`}
            />
            {/* Personal Info */}
            <div className="p-8 flex-1">
              <h2 className="text-4xl font-bold text-blue-500 mb-2">
                {contractor.personalInfo.firstName} {contractor.personalInfo.lastName}
              </h2>
              <div className="text-gray-600 space-y-2">
                <p className='text-gray-600 text-lg'>{contractor.personalInfo.email}</p>
              <p><strong>Mobile Number:</strong> {contractor.mobileNumber}</p>
                {/* <p><strong>Email:</strong> {contractor.personalInfo.email}</p>
                */}
              </div>
            </div>
          </div>
          <div className="mt-10">
            {/* Location Info */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-semibold text-blue-500 mb-4">Personal Information</h3>
              <div className="text-gray-600 space-y-2">
              <p><strong>Gender:</strong> {contractor.personalInfo.gender}</p>
                <p><strong>Age:</strong> {contractor.personalInfo.age}</p>
                <p><strong>Date of Birth:</strong> {contractor.personalInfo.dob}</p>
                <p><strong>Aadhaar Number:</strong> {contractor.personalIdentification.aadhaarNumber}</p>
              </div>
            </div>
            </div>

          {/* Location and Company Info in separate containers */}
          <div className="mt-10">
            {/* Location Info */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-semibold text-blue-500  mb-4">Location</h3>
              <div className="text-gray-600 space-y-2">
                <p><strong>State:</strong> {contractor.locationInfo.state}</p>
                <p><strong>District:</strong> {contractor.locationInfo.district}</p>
                <p><strong>Pincode:</strong> {contractor.locationInfo.pincode}</p>
                <p><strong>Address:</strong> {contractor.locationInfo.address}</p>
                <p><strong>Coordinates:</strong> {contractor.locationInfo.latitude}, {contractor.locationInfo.longitude}</p>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-500 mb-4">Company Details</h3>
              <div className="text-gray-600 space-y-2">
                <p><strong>Name:</strong> {contractor.companyDetails.name}</p>
                <p><strong>Address:</strong> {contractor.companyDetails.address}</p>
                <p><strong>Established Year:</strong> {contractor.companyDetails.establishedYear}</p>
                <p><strong>TIN Number:</strong> {contractor.companyDetails.tinNumber}</p>
                <p><strong>Phone Number:</strong> {contractor.companyDetails.phoneNumber}</p>
                <p><strong>Email:</strong> {contractor.companyDetails.email}</p>
                <p>
                  <strong>Website:</strong>{' '}
                  <a href={`https://${contractor.companyDetails.website}`} className="text-blue-600"  rel="noopener noreferrer">
                    {contractor.companyDetails.website}
                  </a>
                </p>
                <p><strong>CEO Name:</strong> {contractor.companyDetails.ceoName}</p>
                <p><strong>Headquarters:</strong> {contractor.companyDetails.headquartersLocation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractorProfile;
