
import React, { useContext } from "react";
import FinalInfoRow from './FinalInfowRow'
import { GlobalNLContex } from "../../context/nlGlobalContext";
import { FormContext } from "../../context/LandDetailsContext";
import './FinalReview.css';

interface UserData {
    name: string;
    email: string;
    address: string;
    phoneNumber: string;
}

interface FinalReviewProps {
    userData: UserData;
    onEdit: () => void;
    onSubmit: () => void;
}

const Summary: React.FC<FinalReviewProps> = () => {
    const {
        capturedImage,
        aadhaar,
        firstName,
        lastName,
        email,
        gender,
        age,
        dob,
        selectedState,
        pincode,
        selectedDistrict,
        lantitude,
        longitude,
        address,

    } = useContext(GlobalNLContex);

    const {
        formDetails
    } = useContext(FormContext);

    const sendFarmerData = async () => {
        const farmerData = {
            personalIdentification: {
                photo: capturedImage,
                aadhaarNumber: aadhaar,
            },
            personalInfo: {
                firstName,
                lastName,
                email,
                gender,
                age,
                dob,
            },
            locationInfo: {
                state: selectedState,
                district: selectedDistrict,
                pincode,
                longitude,
                latitude: lantitude,
                address,
            },
            landDetails: {
                farmSize: formDetails.farmSize,
                yearsOfExperience: formDetails.yearsOfExperience,
                farmingMethods: formDetails.farmingMethods,
                irrigationMethods: formDetails.irrigation,
                pesticideMethods: formDetails.pesticide,
                lands: formDetails.lands.map(land => ({
                    surveyNumber: land.surveyNumber,
                    subdivisionNumber: land.subdivisionNumber,
                    soilType: land.soilType,
                    landSize: land.landSize,
                    location: land.location,
                    landImage: land.file,
                })),
            },
        };

        try {
            const response = await fetch('http://localhost:5000/api/farmer/store-farmer-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(farmerData),
            });

            if (!response.ok) {
                throw new Error('Failed to save farmer data');
            }

            const result = await response.json();
            console.log('Farmer data saved successfully:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div>
                <h1 className="text-primary-marineBlue font-bold text-[1.6rem] md:text-4xl leading-9">
                    Review Your Information
                </h1>
                <h3 className="text-gray-400 mt-2">
                    Please check your provided details and submit.
                </h3>
                <div className="final-review-card">
                    <h3 className="text-primary-marineBlue text-2xl">Personal identification</h3>
                    <FinalInfoRow
                        label={"Profile Pic"}
                        value={<img src={capturedImage} alt="Captured face" style={{ width: '130px', height: '130px', borderRadius: '10px', border: '2px solid #ddd' }} />}
                    />
                    <FinalInfoRow
                        label={"Aadhaar Number"}
                        value={aadhaar}
                    />
                    <h3 className="text-primary-marineBlue text-2xl mt-5">Personal info</h3>
                    <FinalInfoRow
                        label={"First Name"}
                        value={firstName}
                    />
                    <FinalInfoRow
                        label={"Last Name"}
                        value={lastName}
                    />
                    <FinalInfoRow
                        label={"Email"}
                        value={email}
                    />
                    <FinalInfoRow
                        label={"Gender"}
                        value={gender}
                    />
                    <FinalInfoRow
                        label={"Age"}
                        value={age}
                    />
                    <FinalInfoRow
                        label={"D.O.B"}
                        value={dob}
                    />
                    <h3 className="text-primary-marineBlue text-2xl mt-5">Location details</h3>
                    <FinalInfoRow
                        label={"State"}
                        value={selectedState}
                    />
                    <FinalInfoRow
                        label={"District"}
                        value={selectedDistrict}
                    />
                    <FinalInfoRow
                        label={"Pincode"}
                        value={pincode}
                    />
                    <FinalInfoRow
                        label={"Lantitude"}
                        value={lantitude}
                    />
                    <FinalInfoRow
                        label={"Longtitude"}
                        value={longitude}
                    />
                    <FinalInfoRow
                        label={"Address"}
                        value={address}
                    />
                    <h3 className="text-primary-marineBlue text-2xl mt-5">Land Details</h3>
                    <FinalInfoRow
                        label={"Farm Size"}
                        value={formDetails.farmSize + ' acres.'}
                    />
                    <FinalInfoRow
                        label={"Years Of Experience"}
                        value={formDetails.yearsOfExperience + ' years.'}
                    />
                    <FinalInfoRow
                        label={"Farming Methods"}
                        value={formDetails.farmingMethods}
                    />
                    <FinalInfoRow
                        label={"Irrigation"}
                        value={formDetails.irrigation}
                    />
                    <FinalInfoRow
                        label={"Irrigation"}
                        value={formDetails.irrigation}
                    />
                </div>

            </div>
        </>
    );
};

export default Summary;
