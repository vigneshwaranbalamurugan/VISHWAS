
import React, { useContext } from "react";
import { FormContext } from "../../context/LandDetailsContext";
import FormControl from "./formControl";
import LandEntry from './LandForm'
import Button from './Button'

const LandDetails = () => {
  const {
    formDetails,
    updateFormDetails,
    addLand,
    handleSubmit
  } = useContext(FormContext);
 

  return (
    <>
      <div>
        <h1 className="text-primary-marineBlue font-bold text-[1.6rem] md:text-4xl leading-9">
          Land Details
        </h1>
        <h3 className="text-gray-400 mt-2">
          Please provide your Land details.
        </h3>

        <div className="md:mt-7 mt-5 space-y-4">
          <FormControl
            type={"number"}
            id={"farmSize"}
            label={"Farm Size"}
            placeholder={"farm size in acres"}
            value={formDetails.farmSize}
            onChange={updateFormDetails}
            valid={true}
            errorLabel={"The field is required"}
          />
          <FormControl
            type={"number"}
            id={"yearsOfExperience"}
            label={"Years Of Experience"}
            placeholder={"Ex. 5"}
            value={formDetails.yearsOfExperience}
            onChange={updateFormDetails}
            valid={true}
            errorLabel={"The field is required"}
          />
          <FormControl
            type={"text"}
            id={"farmingMethods"}
            label={"Farming Methods"}
            placeholder={"Ex. Cover cropping,Mixed farming"}
            value={formDetails.farmingMethods}
            onChange={updateFormDetails}
            valid={true}
            errorLabel={"The field is required"}
          />
          <FormControl
            type={"text"}
            id={"irrigation"}
            label={"Irrigation Methods"}
            placeholder={"Ex. Well,Bore"}
            value={formDetails.irrigation}
            onChange={updateFormDetails}
            valid={true}
            errorLabel={"The field is required"}
          />
          <FormControl
            type={"text"}
            id={"pesticide"}
            label={"Pesticide Methods"}
            placeholder={"Ex. Organic,Chemical"}
            value={formDetails.pesticide}
            onChange={updateFormDetails}
            valid={true}
            errorLabel={"The field is required"}
          />
          <label className="text-primary-marineBlue font-medium" >
            Lands
          </label>
          {formDetails.lands.map((land, index) => (
            <LandEntry key={index} index={index} />
          ))}
          
          <Button
            text={"Add Land"}
            type={"button"}
            onClick={addLand}
            className={"bg-green-500 text-white"}
          />
        </div>
      </div>
    </>
  );
};

export default LandDetails;
