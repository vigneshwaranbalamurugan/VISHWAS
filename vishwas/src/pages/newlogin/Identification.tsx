
import React, { useContext } from "react";
import { GlobalNLContex } from "../../context/nlGlobalContext";
import FaceRecognition from "../../facedetection/facedetection";

const Identification = () => {
  const {
    gender,
    setGender,
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
        </div>
      </div>
    </>
  );
};

export default Identification;
