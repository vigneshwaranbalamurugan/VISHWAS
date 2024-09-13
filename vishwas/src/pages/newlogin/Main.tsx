import React, { useContext, useEffect } from "react";
import Identification from "./Identification";
import PersonalInfo from "./personalInfo";
import LandDetails from "./landDetails";
import CompanyDetails from "./CompanyDetails";
import LocationDetails from "./LocationDetails";
import Summary from "./Summary";
import CompanySummary from "./CompanySummary";
import { GlobalNLContex } from "../../context/nlGlobalContext";
import { FormContext } from "../../context/LandDetailsContext";
import { CompanyContext } from "../../context/CompanyContext";
import Button from "./Button";

const Main = () => {
  const {
    currentStep,
    setCompleted,
    setCurrentStep,
    completed,
    firstName,
    lastName,
    setValidFirstName,
    setValidLastName,
    email,
    gender,
    setValidGender,
    validGender,
    validEmail,
    age,
    validAge,
    setValidAge,
    setValidEmail,
    validAadhaar,
    capturedImage,
    setFormCompeleted,
    formCompeleted,
    locationValid,
    validateLocation,
    aadhaar,
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

const {
  companyDetails
} = useContext(CompanyContext);
  useEffect(() => {
    setCompleted(currentStep !== 1);
  }, [currentStep, setCompleted]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const sendFarmerData = async () => {
    const mobileNumber=localStorage.getItem('mobile');
    console.log(mobileNumber);
    const data = {
      mobileNumber,
      firstName,
      lastName,
      email,
      gender,
      age,
      capturedImage,
      aadhaar,
      dob,
      selectedState,
      pincode,
      selectedDistrict,
      lantitude,
      longitude,
      address,
      formDetails
    };
  

    try {
      const response = await fetch('http://localhost:5000/api/v1/farmer/store-farmer-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to save farmer data');
      }

      const result = await response.json();
      alert('Farmer data saved successfully');
      window.location.href=`/profile/${data.mobileNumber}`;
      console.log('Farmer data saved successfully:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const sendContracterData = async () => {
    const mobileNumber=localStorage.getItem('mobile');
    console.log(mobileNumber);
    const data = {
      mobileNumber,
      firstName,
      lastName,
      email,
      gender,
      age,
      capturedImage,
      aadhaar,
      dob,
      selectedState,
      pincode,
      selectedDistrict,
      lantitude,
      longitude,
      address,
      companyDetails
    };
  

    try {
      const response = await fetch('http://localhost:5000/api/v1/contractor/store-buyer-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to save farmer data');
      }

      const result = await response.json();
      alert('Company data saved successfully');
      window.location.href=`/cprofile/${data.mobileNumber}`;
      console.log('Farmer data saved successfully:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const nextStep = (e) => {
    e.preventDefault();
    if (currentStep == 1 && validAadhaar && capturedImage) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep == 1 && (!validAadhaar || !capturedImage)) {
      alert("Please verify Aadhaar and Profile");
    }
    if (currentStep == 2) {
      if (firstName.length <= 2) {
        setValidFirstName(false);
      } else {
        setValidFirstName(true);
      }
      if (lastName.length < 1) {
        setValidLastName(false);
      } else {
        setValidLastName(true);
      }
      if (gender === "") {
        setValidGender(false);
      }
      setValidEmail(emailRegex.test(email));
      setValidAge(age >= 18);
      if (firstName.length > 2 && lastName.length >= 1 && validEmail && validGender && validAge) {
        setCurrentStep(currentStep + 1);
      }
    }
    if (currentStep == 3) {
     const valid = validateLocation();
      if (valid) {
        setCurrentStep(currentStep + 1);
      }
    }
    if (currentStep == 4) {
         setCurrentStep(currentStep + 1);
     }

  };

  const goBack = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep - 1);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setFormCompeleted(true);
  };

  const role=localStorage.getItem('role');
  return (
    <>
      <div className="md:overflow-hidden md:min-h-full md:shadow-none shadow-md mx-auto md:m-0 rounded-xl md:rounded-none md:w-full w-[100%] md:bg-transparent min-h-[400px] bg-white z-10 mt-[84px]">
        <form
          action="#"
          className="md:mx-16 md:my-0 mx-6 my-6 py-0 md:py-10 relative h-full"
        >
          {currentStep === 1 ? <Identification /> : null}
          {currentStep === 2 ? <PersonalInfo /> : null}
          {currentStep === 3 ? <LocationDetails /> : null}
          {currentStep === 4  && role =='farmer'? <LandDetails /> : null}
          {currentStep === 4  && role =='buyer'? <CompanyDetails /> : null}
          {currentStep === 5 && role =='farmer'? <Summary /> : null}
          {currentStep === 5 && role =='buyer'? <CompanySummary /> : null}
          {formCompeleted ? null : (
            <footer className=" relative md:block hidden w-full p-3 left-0 right-0 bottom-0">
              <div className="flex">
                <div className="mr-auto">
                  {completed ? (
                    <Button
                      text={"Go Back"}
                      onClick={goBack}
                      className={
                        "bg-primary-lightBlue text-black hover:text-primary-marineBlue"
                      }
                    />
                  ) : null}
                </div>
                <div className="text-right">
                  <Button
                    text={currentStep === 5 ? "Confirm" : "Next Step"}
                    onClick={currentStep === 5 && role== "farmer" ? sendFarmerData :currentStep === 5 && role== "buyer" ?sendContracterData:nextStep}
                    className={
                      currentStep === 5
                        ? "bg-green-500 text-white"
                        : "bg-primary-marineBlue text-white"
                    }
                  />
                </div>
              </div>
            </footer>
          )}

          {formCompeleted ? null : (
            <footer className="fixed bg-white md:hidden block w-full p-3 left-0 right-0 bottom-0">
              <div className="flex">
                <div className="mr-auto">
                  {completed ? (
                    <Button
                      text={"Go Back"}
                      onClick={goBack}
                      className={
                        "bg-transparent text-gray-400 hover:text-primary-marineBlue"
                      }
                    />
                  ) : null}
                </div>
                <div className="text-right">
                  <Button
                    text={currentStep === 5 ? "Confirm" : "Next Step"}
                    onClick={currentStep === 5 ? submitForm : nextStep}
                    className={
                      currentStep === 5
                        ? "bg-primary-purplishBlue text-white"
                        : "bg-primary-marineBlue text-white"
                    }
                  />
                </div>
              </div>
            </footer>
          )}
        </form>
      </div>
    </>
  );
};

export default Main;