
import React, { useContext } from "react";
import { GlobalNLContex } from "../../context/nlGlobalContext";
import FaceRecognition from "../../facedetection/facedetection";
import FormControl from "./formControl";
import Button from "./Button";

const Identification = () => {
  const {
    aadhaar,
    setAadhaar,
    validAadhaar,
    setValidAadhaar
  } = useContext(GlobalNLContex);



  return (
    <>
      <div>
        <h1 className="text-primary-marineBlue font-bold text-[1.6rem] md:text-4xl leading-9">
          Personal identification
        </h1>
        <h3 className="text-gray-400 mt-2">
          Please provide your profile pic and aadhaar..
        </h3>
        <div className="md:mt-7 mt-5 space-y-4">

          <FaceRecognition />
          <FormControl
            label={"Aadhaar Number"}
            type={"number"}
            id={"aadhaar"}
            placeholder={"e.g. 123456789123"}
            onChange={(e)=>setAadhaar(e.target.value)}
            value={aadhaar}
            valid={validAadhaar}
            errorLabel={"This field is required and must be in minimum length 3"}
          />  
          <Button
            text={"Verify Aadhaar"}
            className={"button"}
            onClick={(e)=>setAadhaar('1')}
          /> 
           </div>
      </div>
    </>
  );
};

export default Identification;
