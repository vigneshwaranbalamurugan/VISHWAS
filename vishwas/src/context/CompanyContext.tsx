import React, { createContext, ReactNode, useState } from 'react';

interface CompanyDetails {
    name: string;
    address: string;
    establishedYear: number;
    tinNumber: string;
    phoneNumber: string;
    email: string;
    website: string;
    ceoName: string;
    headquartersLocation: string;
}

interface CompanyContextType {
    companyDetails: CompanyDetails;
    setCompanyDetails: React.Dispatch<React.SetStateAction<CompanyDetails>>;
    handleFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

 const CompanyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [companyDetails, setCompanyDetails] = useState<CompanyDetails>({
      name: '',
      address: '',
      establishedYear: new Date().getFullYear(),
      tinNumber: '',
      phoneNumber: '',
      email: '',
      website: '',
      ceoName: '',
      headquartersLocation: '',
    });


    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setCompanyDetails(prevDetails => ({
          ...prevDetails,
          [id]: value,
        }));
      };


    return (
      <CompanyContext.Provider value={{ companyDetails,handleFieldChange }}>
        {children}
      </CompanyContext.Provider>
    );
  };

  export {CompanyContext,CompanyProvider};
