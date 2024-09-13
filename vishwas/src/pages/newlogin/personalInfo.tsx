
import React, { useContext } from "react";
import { GlobalNLContex } from "../../context/nlGlobalContext";
import FormControl from "./formControl";


const PersonalInfo = () => {
  const {
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
  } = useContext(GlobalNLContex);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const setFirstNameLogic = (e) => {
    setFirstName(e.target.value);
    if (firstName.length < 2) {
      setValidFirstName(false);
    } else {
      setValidFirstName(true);
    }
  };

  const setLastNameLogic = (e) => {
    setLastName(e.target.value);
    if (lastName.length < 1) {
      setValidLastName(false);
    } else {
      setValidLastName(true);
    }
  };

  const setEmailLogic = (e) => {
    setEmail(e.target.value);
    setValidEmail(emailRegex.test(e.target.value));
  }

  const setGenderLogic=(e) =>{
    setGender(e.target.value);
    setValidGender(true);
  }

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  const handleDobChange = (e) => {
    const newDob = e.target.value;
    setDob(newDob);

    if (newDob) {
      const calculatedAge = calculateAge(newDob);
      setAge(calculatedAge);
    } else {
      setAge(null); // Clear age if DOB is empty
    }
    setValidAge(age>=18);
  };


  return (
    <>
      <div>
        <h1 className="text-primary-marineBlue font-bold text-[1.6rem] md:text-4xl leading-9">
          Personal info
        </h1>
        <h3 className="text-gray-400 mt-2">
          Please provide your name, email address, and D.O.B etc..
        </h3>

        <div className="md:mt-7 mt-5 space-y-4">
          <FormControl
            label={"First Name"}
            type={"text"}
            id={"firstName"}
            placeholder={"e.g. Vigneshwaran"}
            onChange={setFirstNameLogic}
            value={firstName}
            valid={validFirstName}
            errorLabel={"This field is required and must be in minimum length 3"}
          />
          <FormControl
            label={"Last Name"}
            type={"text"}
            id={"lastName"}
            placeholder={"e.g. Balamurugan"}
            onChange={setLastNameLogic}
            value={lastName}
            valid={validLastName}
            errorLabel={"This field is required"}

          />
          <FormControl
            label={"Email Address"}
            type={"email"}
            id={"email"}
            placeholder={"e.g. vignesh@gmail.com"}
            onChange={setEmailLogic}
            value={email}
            valid={validEmail}
            errorLabel={"The email is not in valid format"}
          />
          <div className="flex flex-col gap-2">
            <div className="flex">
              <div className="mr-auto">
                <label className="text-primary-marineBlue font-medium" htmlFor="gender">
                  Gender
                </label>
              </div>
            </div>
            <div className="flex flex-row gap-10">
              <label className="flex items-center gap-2">
                <input
                  id="gender-male"
                  className="w-4 h-4 text-primary-strawberryRed focus:ring-primary-strawberryRed"
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={setGenderLogic}
                />
                <span className="text-lg">Male</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  id="gender-female"
                  className="w-4 h-4 text-primary-strawberryRed focus:ring-primary-strawberryRed"
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={setGenderLogic}
                />
                <span className="text-lg">Female</span>
              </label>
            </div>
            {!validGender && <p className="text-primary-strawberryRed font-medium">Select Gender</p>}
          </div>
          <FormControl
            label={"Age"}
            type={"number"}
            id={"age"}
            placeholder={"Enter DOB,Age will be calculated automatically"}
            onChange={(e) => setAge(e.target.value)}
            value={age}
            disabled={true}
            valid={validAge}
            errorLabel={"The age is must be greater than or equal to 18"}
          />
          <FormControl
            label={"Date of Birth"}
            type={"date"}
            id={"DOB"}
            placeholder={"e.g. "}
            onChange={handleDobChange}
            value={dob}
            valid={validAge}
            errorLabel={"The age is must be greater than or equal to 18"}
          />
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
