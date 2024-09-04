import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Define types for the context values
interface GlobalNLContextType {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  completed: boolean;
  setCompleted: Dispatch<SetStateAction<boolean>>;
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  validFirstName: boolean;
  setValidFirstName: Dispatch<SetStateAction<boolean>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
  validLastName: boolean;
  setValidLastName: Dispatch<SetStateAction<boolean>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  validEmail: boolean;
  setValidEmail: Dispatch<SetStateAction<boolean>>;
  age: string;
  setAge: Dispatch<SetStateAction<string>>;
  validAge: boolean;
  setValidAge: Dispatch<SetStateAction<boolean>>;
  aadhaar: string;
  setAadhaar: Dispatch<SetStateAction<string>>;
  validAadhaar: boolean;
  setValidAadhaar: Dispatch<SetStateAction<boolean>>;
  capturedImage: string | null;
  setCapturedImage: Dispatch<SetStateAction<string | null>>;
  validGender: boolean;
  setValidGender: Dispatch<SetStateAction<boolean>>;
  dob: string;
  setDob: Dispatch<SetStateAction<string>>;
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
  states: string[];
  setStates: Dispatch<SetStateAction<string[]>>;
  districts: string[];
  setDistricts: Dispatch<SetStateAction<string[]>>;
  selectedState: string;
  setSelectedState: Dispatch<SetStateAction<string>>;
  selectedDistrict: string;
  setSelectedDistrict: Dispatch<SetStateAction<string>>;
  pincode: string;
  setPincode: Dispatch<SetStateAction<string>>;
  lantitude: string;
  setLantidude: Dispatch<SetStateAction<string>>;
  longitude: string;
  setLongitude: Dispatch<SetStateAction<string>>;
  address: string;
  setAddress: Dispatch<SetStateAction<string>>;
  locationValid: boolean;
  setlocationValid: Dispatch<SetStateAction<boolean>>;
  formCompeleted: boolean;
  setFormCompeleted: Dispatch<SetStateAction<boolean>>;
  validateLocation: () => void;
}

// Create the context with a default value
export const GlobalNLContex = createContext<GlobalNLContextType | undefined>(undefined);

// Define the provider component
export const GlobalNLProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [completed, setCompleted] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [validFirstName, setValidFirstName] = useState<boolean>(true);
  const [lastName, setLastName] = useState<string>("");
  const [validLastName, setValidLastName] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const [age, setAge] = useState<string>("");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [aadhaar, setAadhaar] = useState<string>("");
  const [validAadhaar, setValidAadhaar] = useState<boolean>(false);
  const [validAge, setValidAge] = useState<boolean>(true);
  const [validGender, setValidGender] = useState<boolean>(true);
  const [dob, setDob] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [states, setStates] = useState<string[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [pincode, setPincode] = useState<string>('');
  const [lantitude, setLantidude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [locationValid, setlocationValid] = useState<boolean>(true);
  const [formCompeleted, setFormCompeleted] = useState<boolean>(false);

  const validateLocation = (): boolean => {
    let isValid = true;
    
    if (!selectedState || !selectedDistrict) {
      isValid = false;
    }
  
    if (pincode.length !== 6 || isNaN(Number(pincode))) {
      isValid = false;
    }
  
    if (!lantitude || !longitude) {
      isValid = false;
    }
  
    if (!address) {
      isValid = false;
    }
  
    setlocationValid(isValid);
  
    return isValid;
  };

  return (
    <GlobalNLContex.Provider
      value={{
        currentStep,
        setCurrentStep,
        completed,
        setCompleted,
        firstName,
        setFirstName,
        validFirstName,
        setValidFirstName,
        lastName,
        setLastName,
        validLastName,
        setValidLastName,
        email,
        setEmail,
        validEmail,
        setValidEmail,
        age,
        setAge,
        validAge,
        setValidAge,
        aadhaar,
        setAadhaar,
        validAadhaar,
        setValidAadhaar,
        capturedImage,
        setCapturedImage,
        validGender,
        setValidGender,
        dob,
        setDob,
        gender,
        setGender,
        states,
        setStates,
        districts,
        setDistricts,
        selectedState,
        setSelectedState,
        selectedDistrict,
        setSelectedDistrict,
        pincode,
        setPincode,
        lantitude,
        setLantidude,
        longitude,
        setLongitude,
        address,
        setAddress,
        locationValid,
        setlocationValid,
        validateLocation,
        formCompeleted,
        setFormCompeleted,
      }}
    >
      {children}
    </GlobalNLContex.Provider>
  );
};
