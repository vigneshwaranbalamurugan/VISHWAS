
import React, { useContext } from "react";
import { GlobalNLContex } from "../../context/nlGlobalContext";
import FormControl from "./formControl";

const LandDetails = () => {
  const {
    email,
    setEmail
  } = useContext(GlobalNLContex);
 


  return (
    <>
      <div>
        <h1 className="text-primary-marineBlue font-bold text-[1.6rem] md:text-4xl leading-9">
          Personal info
        </h1>
        <h3 className="text-gray-400 mt-2">
          Please provide your name, email address, and phone number.
        </h3>

        <div className="md:mt-7 mt-5 space-y-4">
          
          <FormControl
            label={"Email Address"}
            type={"email"}
            id={"email"}
            placeholder={"e.g. stephenking@lorem.com"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
      </div>
    </>
  );
};

export default LandDetails;
