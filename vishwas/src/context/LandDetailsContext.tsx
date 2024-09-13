import React, { createContext, useState, ReactNode, ChangeEvent } from 'react';

interface Land {
  surveyNumber: string;
  subdivisionNumber: string;
  soilType: string;
  landSize: number;
  landLocation: string;
  file?: File | null;
  filePreviewUrl?: string;
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
  updateFormDetailss: (newDetails: Partial<FormDetails>) => void;
  updateFormDetails: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addLand: () => void;
  handleLandInputChange: (index: number, event: ChangeEvent<HTMLInputElement>) => void;
  handleLandFileChange: (index: number, event: ChangeEvent<HTMLInputElement>) => void;
  handleVerify: (index: number) => void;
  removeLand: (index: number) => void;
  handleSubmit: () => void;
}

const defaultFormDetails: FormDetails = {
  farmSize: '',
  yearsOfExperience: '',
  farmingMethods: '',
  irrigation: '',
  pesticide: '',
  lands: [
    {
      surveyNumber: '',
      subdivisionNumber: '',
      soilType: '',
      landSize: 0,
      landLocation: '',
      file: null,
      filePreviewUrl: ''
    }
  ],
  isVerified: false
};


const FormContext = createContext<FormContextType | undefined>(undefined);

const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formDetails, setFormDetails] = useState<FormDetails>(defaultFormDetails);

  const updateFormDetailss = (newDetails: Partial<FormDetails>) => {
    setFormDetails(prevDetails => ({ ...prevDetails, ...newDetails }));
  };

  const updateFormDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    updateFormDetailss({ [id]: value });
  };

  const removeLand = (index: number) => {
    if (formDetails.lands.length > 1) {
      const newLands = formDetails.lands.filter((_, i) => i !== index);
      setFormDetails(prevDetails => ({ ...prevDetails, lands: newLands }));
    }
  };

  const addLand = () => {
    const newLand: Land = {
      surveyNumber: '',
      subdivisionNumber: '',
      soilType: '',
      landSize: 0,
      landLocation: '',
      file: null,
    };
    
    setFormDetails(prevDetails => ({
      ...prevDetails,
      lands: [...prevDetails.lands, newLand],
      isVerified:false
    }));
  };

  const handleLandInputChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    const name=id;
    const newLands = [...formDetails.lands];
    newLands[index] = { ...newLands[index], [name]: value };
    updateFormDetailss({ lands: newLands });
  };

  const handleLandFileChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newLands = [...formDetails.lands];
      const filePreviewUrl = URL.createObjectURL(file);
      newLands[index] = { ...newLands[index], file, filePreviewUrl };
      updateFormDetailss({ lands: newLands });
    }
  };

  const handleVerify = () => {
    // Implement verification logic here
  };

  const handleSubmit = () => {
    // Implement submit logic here
  };

  return (
    <FormContext.Provider
      value={{
        formDetails,
        setFormDetails,
        updateFormDetails,
        updateFormDetailss,
        addLand,
        handleLandInputChange,
        handleLandFileChange,
        removeLand,
        handleVerify,
        handleSubmit
      }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };