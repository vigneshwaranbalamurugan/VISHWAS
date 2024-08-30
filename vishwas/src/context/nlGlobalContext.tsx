import { createContext, useState } from "react";

export const GlobalNLContex = createContext();

export const GlobalNLProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(true);
  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(true);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [age, setAge] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [validAadhaar, setValidAadhaar] = useState(false);
  const [validAge, setValidAge] = useState(true);
  const [validGender, setValidGender] = useState(true);
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [pincode, setPincode] = useState('');
  const [lantitude,setLantidude] = useState('');
  const [longitude,setLongitude] = useState('');
  const [address, setAddress] = useState('');
  const [locationValid,setlocationValid] = useState(true);
  const [formCompeleted, setFormCompeleted] = useState(false);

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
        aadhaar,
        setAadhaar,
        setValidAge,
        validAadhaar,
        setValidAadhaar,
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
        pincode,
        setPincode,
        setSelectedState,
        selectedDistrict, 
        setSelectedDistrict,
        lantitude,
        setLantidude,
        longitude,
        setLongitude,
        address, 
        setAddress,
        locationValid,
        setlocationValid,
        formCompeleted,
        setFormCompeleted,
      }}
    >
      {children}
    </GlobalNLContex.Provider>
  );
};