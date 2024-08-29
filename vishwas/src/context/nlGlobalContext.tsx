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
  const [validAge, setValidAge] = useState(true);
  const [validGender, setValidGender] = useState(true);
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
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
        setValidAge,
        validGender,
        setValidGender,
        dob,
        setDob,
        gender,
        setGender,
        formCompeleted,
        setFormCompeleted,
      }}
    >
      {children}
    </GlobalNLContex.Provider>
  );
};