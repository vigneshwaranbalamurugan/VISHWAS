
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


const Summary= () => {
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
                        label={"Pesticide"}
                        value={formDetails.pesticide}
                    />
                    {formDetails.lands.map((land, index) => (
                        <div key={index} className="land-info">
                            <h3 className="text-primary-marineBlue text-2xl mt-2">
                               Land {index+1}
                            </h3>
                            <FinalInfoRow label="Survey Number" value={land.surveyNumber} />
                            <FinalInfoRow label="Subdivision Number" value={land.subdivisionNumber} />
                            <FinalInfoRow label="Soil Type" value={land.soilType} />
                            <FinalInfoRow label="Land Size" value={land.landSize} />
                            <FinalInfoRow label="Land Location" value={land.landLocation} />
                            <FinalInfoRow label="File" value={<img src={land.filePreviewUrl || 'No URL'} alt="Land Image" style={{ width: '200px', height: '200px', borderRadius: '10px', border: '2px solid #ddd' }} />} />
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default Summary;
