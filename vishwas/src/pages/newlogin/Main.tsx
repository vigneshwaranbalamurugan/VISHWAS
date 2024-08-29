import React, { useContext, useEffect } from "react";
import Identification from "./Identification";
import PersonalInfo from "./personalInfo";
import LandDetails from "./landDetails";
import { GlobalNLContex } from "../../context/nlGlobalContext";
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
    setFormCompeleted,
    formCompeleted,
  } = useContext(GlobalNLContex);

  useEffect(() => {
    setCompleted(currentStep !== 1);
  }, [currentStep, setCompleted]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const nextStep = (e) => {
    e.preventDefault();
    if (currentStep == 1 && validAadhaar) {
      setCurrentStep(currentStep + 1);
    }else if(currentStep == 1 && !validAadhaar){
    alert("Please verify Aadhaar");
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
   
  };

  const goBack = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep - 1);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setFormCompeleted(true);
  };

  return (
    <>
      <div className="md:overflow-hidden md:min-h-full md:shadow-none shadow-md mx-auto md:m-0 rounded-xl md:rounded-none md:w-full w-[100%] md:bg-transparent min-h-[400px] bg-white z-10 mt-[84px]">
        <form
          action="#"
          className="md:mx-16 md:my-0 mx-6 my-6 py-0 md:py-10 relative h-full"
        >
          {currentStep === 1 ? <Identification /> : null}
          {currentStep === 2 ? <PersonalInfo /> : null}
          {currentStep === 3 ? <LandDetails /> : null}
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