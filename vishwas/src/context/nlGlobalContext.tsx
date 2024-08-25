import { createContext, useState } from "react";

export const GlobalNLContex = createContext();

export const GlobalNLProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [formCompeleted, setFormCompeleted] = useState(false);

  return (
    <GlobalNLContex.Provider
      value={{
        currentStep,
        setCurrentStep,
        completed,
        setCompleted,
        name,
        setName,
        email,
        setEmail,
        number,
        setNumber,
        formCompeleted,
        setFormCompeleted
      }}
    >
      {children}
    </GlobalNLContex.Provider>
  );
};