
import React, { useContext } from "react";
import { GlobalNLContex } from "../../context/nlGlobalContext";
import DisplayControl from "./Displaysummary";

const Summary = () => {
    const {
        capturedImage,
        aadhaar,
        firstName,
        lastName,
        email,
        gender,
        age,
        dob,
    } = useContext(GlobalNLContex);


    return (
        <>
            <div>
                <h1 className="text-primary-marineBlue font-bold text-[1.6rem] md:text-4xl leading-9">
                    Final Details
                </h1>
                <h3 className="text-gray-400 mt-2">
                    Please check your provided details and submit.
                </h3>
                <div>

                    <div className="md:mt-7 mt-5">
                        <div className="rounded-lg bg-secondary-summary">
                            <div className=" items-center space-y-1">
                                <DisplayControl
                                    Label={"Profile Pic"}
                                    Value={<img src={capturedImage} alt="Captured face" style={{width:'130px',height:'130px',borderRadius:'10px',border: '2px solid #ddd'}}/>}
                                />
                                 <DisplayControl
                                    Label={"Aadhaar"}
                                    Value={aadhaar}
                                />
                                <DisplayControl
                                    Label={"First Name"}
                                    Value={firstName}
                                />
                                <DisplayControl
                                    Label={"Last Name"}
                                    Value={lastName}
                                />
                                 <DisplayControl
                                    Label={"Email"}
                                    Value={email}
                                />
                                 <DisplayControl
                                    Label={"Gender"}
                                    Value={gender}
                                />
                                 <DisplayControl
                                    Label={"Age"}
                                    Value={age}
                                />
                                 <DisplayControl
                                    Label={"D.O.B"}
                                    Value={dob}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Summary;