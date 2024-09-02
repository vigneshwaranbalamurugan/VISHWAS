import React, { createContext, useState, ReactNode, ChangeEvent } from 'react';

interface Land {
    surveyNumber: string;
    subdivisionNumber: string;
    soilType: string;
    landSize: number;
    landLocation: string;
    file?: File | null;
  }
  
  interface FormDetails {
    farmSize: string;
    yearsOfExperience: string;
    farmingMethods: string;
    irrigation: string;
    pesticide: string;
    lands: Land[];
    isVerified: boolean;
  }

  interface FormContextType {
    formDetails: FormDetails;
    updateFormDetails: (newDetails: Partial<FormDetails>) => void;
    addLand: (land: Land) => void;
    handleLandInputChange: (index: number, event: ChangeEvent<HTMLInputElement>) => void;
    handleLandFileChange: (index: number, event: ChangeEvent<HTMLInputElement>) => void;
    handleVerify: (index: number) => void;
    handleSubmit: () => void;
  }
  
  const defaultFormDetails: FormDetails = {
    farmSize: '',
    yearsOfExperience: '',
    farmingMethods: '',
    irrigation: '',
    pesticide: '',
    lands: [],
    isVerified: false
  };


  const FormContext = createContext<FormContextType | undefined>(undefined);

const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formDetails, setFormDetails] = useState<FormDetails>(defaultFormDetails);

  const updateFormDetails = (newDetails: Partial<FormDetails>) => {
    setFormDetails(prevDetails => ({ ...prevDetails, ...newDetails }));
  };

  const addLand = (land: Land) => {
    setFormDetails(prevDetails => ({
      ...prevDetails,
      lands: [...prevDetails.lands, land]
    }));
  };

  const handleLandInputChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newLands = [...formDetails.lands];
    newLands[index] = { ...newLands[index], [name]: value };
    updateFormDetails({ lands: newLands });
  };

  const handleLandFileChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newLands = [...formDetails.lands];
      newLands[index] = { ...newLands[index], file };
      updateFormDetails({ lands: newLands });
    }
  };

  const handleVerify = () => {
    // Implement verification logic here
  };

  const handleSubmit = () => {
    // Implement submit logic here
  };

  return (
    <FormContext.Provider value={{
      formDetails,
      updateFormDetails,
      addLand,
      handleLandInputChange,
      handleLandFileChange,
      handleVerify,
      handleSubmit
    }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };