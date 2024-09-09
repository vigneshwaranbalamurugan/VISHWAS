
import React, { useContext } from "react";
import FinalInfoRow from './FinalInfowRow'
import { GlobalNLContex } from "../../context/nlGlobalContext";
import { CompanyContext } from "../../context/CompanyContext";
import './FinalReview.css';

const CompanySummary = () => {
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
        companyDetails
    } = useContext(CompanyContext);



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
                    <FinalInfoRow label="Name" value={companyDetails.name} />
                    <FinalInfoRow label="Address" value={companyDetails.address} />
                    <FinalInfoRow label="Established Year" value={companyDetails.establishedYear.toString()} />
                    <FinalInfoRow label="TIN Number" value={companyDetails.tinNumber} />
                    <FinalInfoRow label="Phone Number" value={companyDetails.phoneNumber} />
                    <FinalInfoRow label="Email" value={companyDetails.email} />
                    <FinalInfoRow label="Website" value={companyDetails.website} />
                    <FinalInfoRow label="CEO Name" value={companyDetails.ceoName} />
                    <FinalInfoRow label="Headquarters Location" value={companyDetails.headquartersLocation} />


                </div>

            </div>
        </>
    );
};

export default CompanySummary;
